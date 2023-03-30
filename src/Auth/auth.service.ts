import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from './User';

@Injectable()
export class AuthService {
  constructor(private readonly jwtService: JwtService) {}

  async generateToken(user:User) {
    const payload = { uid: user.uid };
    const token = this.jwtService.sign(payload);
    return token;
  }
}
