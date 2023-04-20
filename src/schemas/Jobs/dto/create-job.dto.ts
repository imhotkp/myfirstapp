import { Type } from "class-transformer";
import { IsEnum, IsMongoId, IsNotEmpty, IsNumber, IsOptional, IsString, ValidateNested } from "class-validator";
import { ACCOUNT_TYPE, JOB_TYPE } from "src/constants";
import { AddressDTO } from "src/dto/address.dto";
import { Address } from "src/schemas/common";

export class CreateJobDto{
    @IsMongoId()
    @IsNotEmpty()
    userId:string

    @IsString()
    @IsNotEmpty()
    companyName:string

    @IsString()
    @IsNotEmpty()
    title:string

    @IsString()
    @IsNotEmpty()
    description:string
    
    @IsNumber()
    @IsNotEmpty()
    experience:number

    @IsString({each:true})
    @IsOptional()
    tags?:string[]

    @IsString()
    @IsOptional()
    salary?:string

    @IsEnum(JOB_TYPE)
    @IsNotEmpty()
    type:JOB_TYPE
    
    @Type(()=>AddressDTO)
    @ValidateNested()
    @IsNotEmpty()
    location:Address

}