import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { User } from 'src/models/user.model';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
 @Post('login')
  public login(@Body()body:Pick<User,'email'|'password'>){
   return this.authService.login(body.email,body.password);
  //  return '[Test]:login'
  }
@Post('register')
public register(@Body()body:Omit<User,'id'>){
return this.authService.register(body)
// return '[Test]:register'
}

}
