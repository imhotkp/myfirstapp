import { BadRequestException, Injectable, NotFoundException, ServiceUnavailableException, UnauthorizedException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { IUserModel, USER_MODEL, User, UserDocument } from "./user.schema";
import { Model } from "mongoose";
import { CreateUserDto } from "./Dto/create-user.dto";
import { UpdateUserDto } from "./Dto/update-user.dto";
import { AccountLoginDto } from "./Dto/account-login.dto";
import { compare } from "bcrypt";

@Injectable()
export class UsersServive{
constructor(@InjectModel(USER_MODEL)private readonly userModel:IUserModel){
    console.log(this.userModel)
}

async create(createUserDto:CreateUserDto){
    try {
        const user= await this.userModel.create(createUserDto)
        return user
    } catch (error) {if(error.name==="ValidationError"){
        throw new BadRequestException(error.errors)
    }
      throw new ServiceUnavailableException()  
    }

}

async login(accountLoginDto:AccountLoginDto){
    const {email,password}=accountLoginDto
   const user=await this.userModel.findByEmailIdAndPassword(email,password)
   if(!user){
    throw new NotFoundException("User Not Found")
   }
  
   return user
}

 async findall(){
   const users= await this.userModel.find()
   return users
}
async findOne(id:string){
const user=await this.userModel.findById(id)
if(!user){
    throw new NotFoundException("User not Found")
}
return user
}
async update(id:string,updateUserDto:UpdateUserDto){
const updatedUser=await this.userModel.findByIdAndUpdate(id,updateUserDto,{new:true})
if(!updatedUser){
    throw new NotFoundException("User Not Found")
}
return updatedUser
}
async remove(id:string){
const deletedUser=await this.userModel.findByIdAndDelete(id)
if(!deletedUser){
    throw new NotFoundException("User Not Found")
}
return{_id:id};
}
}