import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { UsersServive } from "./users.service";
import { CreateUserDto } from "./Dto/create-user.dto";
import { UpdateUserDto } from "./Dto/update-user.dto";
import { AccountLoginDto } from "./Dto/account-login.dto";

@Controller("users")
export class UserController{
constructor(private readonly userService:UsersServive){}
@Post()
create(@Body()createUserDto:CreateUserDto){
    return this.userService.create(createUserDto)
}

@Post("login")
login(@Body()accountLoginDto:AccountLoginDto){
    return this.userService.login(accountLoginDto)
}

@Get()
findall(){
    return this.userService.findall()
}
@Get()
findOne(@Param("id")id:string){
    return this.userService.findOne(id)
}
@Put(":id")
update(@Param("id")id:string,@Body()updateUserDto:UpdateUserDto){
   return this.userService.update(id,updateUserDto)
}

@Delete(":id")
remove(@Param("id")id:string){
    return this.userService.remove(id)
}
}