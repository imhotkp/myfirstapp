import { Module } from '@nestjs/common';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { AppController } from './app.controller';
import { AuthModule } from './Auth/auth.module';


@Module({
  imports: [AuthModule,PassportModule],
  controllers: [AppController],
  providers: [JwtService],
})
export class AppModule {}
