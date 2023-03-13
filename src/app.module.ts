import { Module } from '@nestjs/common';


import { newusersController } from './newusers.controller';

@Module({
  imports: [],
  controllers: [newusersController],
  providers: [],
})
export class AppModule {}
