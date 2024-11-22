import {BadRequestException, Injectable, UnauthorizedException} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import {EntityManager, Repository} from 'typeorm';
import { User } from './entities/user.entity';
import { LoginUserDto } from './dto/login-user.dto';
import { Response } from 'express';
import { SecurityService } from './user-security.service';
import {AuthToken} from "./entities/auth.token";
import {Post} from "../posts/entities/post.entity";

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

  async login(loginUserDto: LoginUserDto, res: Response): Promise<void> {
    const user = await this.userRepository.findOne({
      where: { username: loginUserDto.username },
    });

    // Check if the user exists
    if (!user) {
      throw new UnauthorizedException('Invalid username or password');
    }

    // Verify the password
    const isPasswordValid = await this.securityService.comparePasswords(
        loginUserDto.password,
        user.hash,
    );
    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid username or password');
    }

    // Generate a token
    const generatedToken = this.securityService.generateAuthToken();

    // Set the token as a cookie
    this.securityService.setCookieToken(res, generatedToken);

    // Save the token in the database
    const tokenEntity = new AuthToken();
    tokenEntity.token = generatedToken;
    tokenEntity.user = user;
    tokenEntity.expiresAt = new Date(Date.now() + 3 * 24 * 60 * 60 * 1000); // 3 days expiration
    await this.entityManager.save(tokenEntity);
  }

}
