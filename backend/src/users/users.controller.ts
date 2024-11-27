import {Controller, Get, Post, Body, Res, Req} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import {LoginUserDto} from "./dto/login-user.dto";
import  {Response, Request} from 'express';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('register')
  async register(@Body() createUserDto : CreateUserDto) {
    return await this.usersService.register(createUserDto);
  }
  @Post('login')
  async login(@Body() loginUserDto: LoginUserDto, @Res() res : Response) {
    return await this.usersService.login(loginUserDto, res);
  }
  @Get('check')
  async check(@Req() req: Request, @Res() res : Response) {
    return await this.usersService.check(req, res);
  }
  @Get('logout')
  async logout(@Req() req: Request, @Res() res : Response){
    await this.usersService.logout(req, res);
  }
}
