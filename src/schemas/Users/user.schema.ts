import { Prop, Schema, SchemaFactory, raw } from "@nestjs/mongoose";
import { ACCOUNT_STATUS, ACCOUNT_TYPE } from "src/constants";
import { Address, AddressSchema } from "../common/address.schema";
import { Document, Model } from "mongoose";
import { compare, hash } from "bcrypt";
import { NotFoundException, UnauthorizedException } from "@nestjs/common";
@Schema({
    timestamps:true
})
export class User{
@Prop({})    
name:string
@Prop({required:true})
email:string
@Prop({required:true,select:false})
password:string
@Prop({required:true})
age?:number
@Prop({required:true})
phone?:string
@Prop({
    type:String,
    enum:Object.keys(ACCOUNT_STATUS),
    default:ACCOUNT_STATUS.ACTIVE
})
status?:ACCOUNT_STATUS

@Prop({
    type:String,
    enum:Object.keys(ACCOUNT_TYPE),
    immutable:true,
    required:true
})
accountType?:ACCOUNT_TYPE

@Prop({default:[]})
social?:string[];

@Prop({default:true})
isEmailVerification?:boolean

@Prop({type:AddressSchema,required:true})
address:Address
@Prop(raw({
    reference:{type:String},
    beta:{type:Boolean},
})
)
metadata:Record<string,any>|any

isValidPassword:(candidatePassword:string)=>Promise<boolean>
}

const schema=SchemaFactory.createForClass(User)
export type UserDocument=Document & User


export interface IUserModel extends Model<UserDocument>{
    findByEmailIdAndPassword:(email:string,password:string)=>Promise<UserDocument | undefined>
}
export const USER_MODEL=User.name
export const UserSchema=schema
UserSchema.pre("save",async function(next){
   const hashedPassword= await hash(this.password,10)
   this.password=hashedPassword
    next()
})
UserSchema.method("isValidPassword",async function(candidatePassword:string){
    const hashedPassword=this.password
    const isMatched=await compare(candidatePassword,hashedPassword)
    return isMatched
}) 

UserSchema.static("findByEmailIdAndPassword",async function (email:string,password:string){
    const user=await this.findOne<UserDocument>({email},"+password")
   if(!user){
    throw new NotFoundException("User Not Found")
    return
   }
   const isPwdMatched=await user.isValidPassword(password)
   
     if(!isPwdMatched){
    throw new UnauthorizedException()
    return
   }
   return user
})