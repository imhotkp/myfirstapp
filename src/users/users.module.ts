import { Module } from '@nestjs/common';

import { UsersServices } from './user.service';

@Module({
  imports: [],
  controllers: [],
  providers: [UsersServices],
  exports:[UsersServices]
})
export class UserModule {}
