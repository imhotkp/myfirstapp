import { AddressDTO } from "src/dto/address.dto"
import { PartialType,OmitType } from "@nestjs/mapped-types"
import { CreateUserDto } from "./create-user.dto"
export class UpdateUserDto extends PartialType(OmitType(CreateUserDto,["accountType","metadata"])){
  
}