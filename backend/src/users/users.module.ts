import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import {TypeOrmModule} from "@nestjs/typeorm";
import {User} from "./entities/user.entity";
import {AuthToken} from "./entities/auth.token";
import {SecurityService} from "./user-security.service";

@Module({
  imports : [TypeOrmModule.forFeature([User, AuthToken])],
  controllers: [UsersController],
  providers: [UsersService, SecurityService],
})
export class UsersModule {}
