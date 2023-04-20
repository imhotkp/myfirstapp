import { Module } from '@nestjs/common';

import { MongooseModule } from '@nestjs/mongoose';
import { JobsService } from './jobs.service';
import { JOB_MODEL, JobSchema } from './jobs.schema';
import { UserController } from '../Users/users.controller';
import { UsersModule } from '../Users/users.module';
import { JobsController } from './jobs.controller';



@Module({
  imports: [UsersModule],
  controllers: [JobsController],
  providers: [JobsService],
  exports:[]
})
export class JobsModule {}