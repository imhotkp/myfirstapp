import { Injectable } from "@nestjs/common";
import { User } from "./user.entity";

@Injectable()
export class UsersServices{
public users:User[]=[{
    username:'User1',
    password:'Admin',
    email:'User1@gmail.com'
},
{
    username:'User2',
    password:'Admin',
    email:'User2@gmail.com'
},
{
    username:'User3',
    password:'Admin',
    email:'User3@gmail.com'
},
];
getUserByName(userName:string):User{
    console.log(userName)

return this.users.find((user:User)=>user.username==userName)
}
}