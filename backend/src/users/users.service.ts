import {Body, Injectable, NotFoundException, UnauthorizedException} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import {InjectRepository} from "@nestjs/typeorm";
import {EntityManager, Repository} from "typeorm";
import {User} from "./entities/user.entity";
import {LoginUserDto} from "./dto/login-user.dto";
import {UserSecurity} from "./user.class";
import {Response} from "express";

@Injectable()
export class UsersService {
  constructor(
      @InjectRepository(User)
      private readonly userRepository: Repository<User>,
      private readonly entityManager: EntityManager
  ) {}

    async register(createUserDto: CreateUserDto) {
      const user = this.userRepository.create(createUserDto);
      user.hash = await UserSecurity.hashPassword(createUserDto.password);
      await this.entityManager.save(user);
    }

    async login(loginUserDto: LoginUserDto, res : Response) {
      const user = await this.userRepository.findOne({where : {username : loginUserDto.username}});
      if(!user){
        throw new UnauthorizedException('Invalid password');
      }


      if(!await UserSecurity.comparePasswords(loginUserDto.password, user.hash)){
        throw new UnauthorizedException('Invalid password');
      }
        UserSecurity.setCookieToken(res, UserSecurity.generateAuthToken());
    }


}
