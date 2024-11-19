import {Post} from "../entities/post.entity";
import {OmitType, PartialType} from "@nestjs/mapped-types";
import {IsNotEmpty, IsNumber, IsString} from "class-validator";

export class CreatePostDto extends OmitType(Post, ['id', 'likes', 'views', 'user'] as const) {
    @IsString()
    @IsNotEmpty()
    title!: string;

    @IsString()
    @IsNotEmpty()
    content!: string;

    @IsString()
    @IsNotEmpty()
    username !: string;
}

