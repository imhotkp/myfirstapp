import { Module } from '@nestjs/common';
import { UserModule } from 'src/users/users.module';
import { PassportLocalStrategy } from './passport.local.storage';


@Module({
  imports: [UserModule],
  controllers: [],
  providers: [PassportLocalStrategy],
})
export class AuthModule {}
