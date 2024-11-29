import {Post} from "../entities/post.entity";
import {OmitType} from "@nestjs/mapped-types";
import {IsNotEmpty, IsString} from "class-validator";

export class CreatePostDto extends OmitType(Post, ['id', 'likes', 'views', 'user'] as const) {
    @IsString()
    @IsNotEmpty()
    title!: string;

    @IsString()
    @IsNotEmpty()
    content!: string;
}

