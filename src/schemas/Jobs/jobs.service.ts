import { ForbiddenException, Injectable, NotFoundException } from "@nestjs/common";
import { JOB_MODEL, JobDocument } from "./jobs.schema";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { UsersServive } from "../Users/users.service";
import { ACCOUNT_TYPE } from "src/constants";
import { CreateJobDto } from "./dto/create-job.dto";
import { UpdateJobDto } from "./dto/update-job.dto";

@Injectable()
export class JobsService{
    constructor(@InjectModel(JOB_MODEL)private readonly jobModel:Model<JobDocument>,
    private readonly usersService:UsersServive){
        console.log(this.jobModel)
    }


    async create(createJobDto:CreateJobDto){
        const user= await this.usersService.findOne(createJobDto.userId)
        if(!user){
            throw new NotFoundException("User Not Found")
        }
        else if (user.accountType!==ACCOUNT_TYPE.EMPLOYER){
            throw new ForbiddenException("Only Employer can create the Job")
        }
      const job=  await  this.jobModel.create({...createJobDto,employer:user._id})
      return job
    }


    async findall(){
        const jobs= await this.jobModel.find()
        
        return jobs;
    }

    async findOne(id:string){
        const job=await (await this.jobModel.findById(id))
        if(!job){
            throw new NotFoundException("Job Not Found")
        }
        return job
    }

    async update(id:string,updateJobDto:UpdateJobDto){
     const updatedJob= await this.jobModel.findByIdAndUpdate(id,updateJobDto,{new:true})
          if(!updatedJob){
            throw new NotFoundException("Job Not Found")
          }
          return updatedJob
    }
    async remove(id:string){
       const deletedJob= await this.jobModel.findByIdAndDelete(id)
       if(!deletedJob){
        throw new NotFoundException("Job Not Found")
       }
       return {
        _id:id
       }
    }

}