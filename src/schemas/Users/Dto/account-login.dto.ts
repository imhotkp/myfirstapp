import { IsNotEmpty, IsString } from "class-validator";

export class AccountLoginDto{
    @IsString()
    @IsNotEmpty()
    email:string
    
    @IsString()
    @IsNotEmpty()
    password:string
}