import { Controller, Get, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Controller()
export class AppController {
  @Post()
  @UseGuards(AuthGuard('jwt'))
  getHello(): string {
    return 'Hello World!';
  }
}
