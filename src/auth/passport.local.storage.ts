import { Injectable } from "@nestjs/common";
import { UnauthorizedException } from "@nestjs/common/exceptions";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-local";
import { User } from "src/users/user.entity";
import { UsersServices } from "src/users/user.service";

@Injectable()
export class PassportLocalStrategy extends PassportStrategy(Strategy){
    constructor(private readonly userServices: UsersServices) {
        super();
      }
      validate(username:string,password:string):User{
        console.log(username)
        const user:User=this.userServices.getUserByName(username)
        console.log(user)
        if(user==undefined){
             throw new UnauthorizedException()
        }
       if(user.password==password)
      {return user}  
       
      }
}