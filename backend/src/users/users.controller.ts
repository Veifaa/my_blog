import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  //register
  //login
  //check

  @Post('register')
  register(@Body() createUserDto : CreateUserDto) {
    return "Register new user";
  }
  @Post('login')
  login(@Body() createUserDto: any) {
    return "login";
  }
  @Post('check')
  check(@Body() authTokenDto : any){
    return "check token";
  }
  @Post('logout')
  logout(@Body() logoutTokenDto : any){
    return "logout";
  }

}
