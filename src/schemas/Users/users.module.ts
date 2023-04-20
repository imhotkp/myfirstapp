import { Module } from '@nestjs/common';
import { UsersServive } from './users.service';
import { MongooseModule } from '@nestjs/mongoose';
import { USER_MODEL, UserSchema } from './user.schema';
import { UserController } from './users.controller';


@Module({
  imports: [],
  controllers: [UserController],
  providers: [UsersServive],
  exports:[UsersServive]
})
export class UsersModule {}