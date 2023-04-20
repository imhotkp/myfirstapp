import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { JOB_TYPE } from "src/constants/jobs.constant";
import { Address, AddressSchema } from "../common/address.schema";
import { Types } from "mongoose";
import { USER_MODEL, User } from "../Users/user.schema";
import { Document } from "mongoose";
import { Next } from "@nestjs/common";

@Schema({
    timestamps:true
})
export class Job{
@Prop({type:Types.ObjectId,ref:USER_MODEL,required:true})
employer:string|Types.ObjectId|User
@Prop({required:true})    
companyName:string

@Prop({required:true})
title:string

@Prop({required:true})
description:string

@Prop({required:true})
experience:number

@Prop({default:[]})
tags?:string[]

@Prop()
salary?:String

@Prop({type:String,
enum:Object.keys(JOB_TYPE),
required:true})
type?:JOB_TYPE

@Prop({type:AddressSchema,required:true})
location:Address
}
export type JobDocument=Document & Job
export const JobSchema= SchemaFactory.createForClass(Job)
JobSchema.pre("findOne",function(next:Function ) {
    this.populate({path:"employer",select:{name:1}})
    next()
})
JobSchema.pre("find",function(next:Function ) {
    this.populate({path:"employer",select:{name:1}})
    next()
})

export const JOB_MODEL=Job.name