import {Controller, Get, Post, Body, Patch, Param, Delete, Res} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import {LoginUserDto} from "./dto/login-user.dto";

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('register')
  async register(@Body() createUserDto : CreateUserDto) {
    return this.usersService.register(createUserDto);
  }
  @Post('login')
  async login(@Body() loginUserDto: LoginUserDto, @Res() res : Response) {
    return this.usersService.login(loginUserDto, res);
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
