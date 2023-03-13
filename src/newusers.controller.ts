import { Body, Controller, Post,Get, Param, Put, Delete } from "@nestjs/common";
import { create } from "domain";
import{CreateUserDto} from "./Dto";
let USERS=[];
@Controller('newusers')
export class newusersController{
    @Post()
    addUser(@Body() createUserDto:CreateUserDto){
      USERS.push(createUserDto);
      return "user added"; 
    }
    @Get()
    getUser(){
     return USERS;
    }
    @Get(':id')
    getUserbyId(@Param('id') id:number){
     return USERS.find((user)=>user.id=+id)
    }
    @Put(':id')
    updateUser(@Param('id') id:number,@Body() updateUserDto:CreateUserDto){
      const userIdx=USERS.findIndex((user)=>user.id=+id)
      if(!userIdx){
      return
      }
      USERS[userIdx]=updateUserDto

    }
    @Delete(':id')
    deleteUser(@Param('id') id:number){
      USERS=USERS.filter((user)=>user.id=+id)
    }
}