import {BadRequestException, Injectable, UnauthorizedException} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import {EntityManager, Repository} from 'typeorm';
import { User } from './entities/user.entity';
import { LoginUserDto } from './dto/login-user.dto';
import { Response, Request } from 'express';
import { SecurityService } from './user-security.service';
import {AuthToken} from "./entities/auth.token";
import {CheckResponse, CheckResponseStructure} from "./user-response/response/response";

@Injectable()
export class UsersService {
  constructor(
      @InjectRepository(User)
      private readonly userRepository: Repository<User>,
      private readonly securityService: SecurityService,
      @InjectRepository(AuthToken)
      private readonly tokenRepository: Repository<AuthToken>,
      private readonly entityManager: EntityManager
  ) {}

  async register(createUserDto: CreateUserDto): Promise<void> {
    const mUser = await this.userRepository.findOne({ where: { username: createUserDto.username } });
    if(mUser){
      throw new BadRequestException("User is already exists");
    }

    const user = this.userRepository.create(createUserDto);

    // Hash the password using the security service
    user.hash = await this.securityService.hashPassword(createUserDto.password);

    // Save the user in the database
    await this.userRepository.save(user);
  }

  async login(loginUserDto: LoginUserDto, req : Request, res: Response): Promise<void> {
    if((!loginUserDto.username && !loginUserDto.mail) || !loginUserDto.password){
      throw new BadRequestException("Some required fields are missing or do not match");
    }

    let user;
    if(loginUserDto.username){
      user = await this.userRepository.findOne({
        where : {username : loginUserDto.username}
      })
    }
    else{
      user = await this.userRepository.findOne({
        where : {mail : loginUserDto.mail}
      })
    }

    if(!user){
      throw new BadRequestException("User does not exist");
    }

    if(! await this.securityService.comparePasswords(loginUserDto.password, user.hash)){
      throw new BadRequestException("Wrong Password");
    }

    const tokenSTR  = this.securityService.generateAuthToken();

    const token = this.tokenRepository.create({
      user: user,
      token: tokenSTR,
      createdAt: new Date(), // текущая дата и время
      expiresAt: new Date(Date.now() + 1000 * 60 * 60 * 24 * 3), // добавляем 3 дня, в миллисекундах
    });


    this.securityService.setCookieToken(res,tokenSTR);

    console.log('before db');
    await this.tokenRepository.save(token);
    console.log('after db');

    res.status(200).send('Вы успешно авторизированы');
  }
  async check(req : Request, res : Response){
    const user = await this.securityService.getUserByCookie(req, res);
    console.log(user);
    res.status(200).send(user.username);
  }
  async logout(req : Request, res : Response){
    await this.securityService.removeToken(req, res);
    res.status(200).send('you are logged out');
  }
}
