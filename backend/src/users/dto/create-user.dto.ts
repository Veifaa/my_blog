import {OmitType} from "@nestjs/mapped-types";
import {User} from '../entities/user.entity'
import {IsEmail, IsOptional, IsString, MaxLength, MinLength} from "class-validator";
class BaseCreateUserDTO extends OmitType(User, ['id', 'hash'] as const){}


export class CreateUserDto extends BaseCreateUserDTO {
    @IsString()
    @MinLength(3, {message: 'Username must be at least 3 characters'})
    @MaxLength(20, {message: 'Username must not exceed 20 characters'})
    username !: string;

    @IsString()
    @MinLength(4,{message : "Password must be at least 4 characters"})
    @MaxLength(20, { message: 'Password must not exceed 20 characters'})
    password  !: string;

    @IsOptional()
    @IsString()
    @IsEmail()
    @MaxLength(255, { message: 'Email too long'})
    mail ?: string;
}
