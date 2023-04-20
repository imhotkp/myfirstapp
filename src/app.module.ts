import { Module } from '@nestjs/common';

import { AuthModule } from './auth/auth.module';
import { FirebaseService } from './firebase/firebase.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [AuthModule,ConfigModule.forRoot({envFilePath:[".env"],
  cache:true,expandVariables:true,isGlobal:true})],
  controllers: [],
  providers: [ FirebaseService],
})
export class AppModule {}
