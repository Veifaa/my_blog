import {Post} from "../entities/post.entity";
import {OmitType, PartialType} from "@nestjs/mapped-types";
import {IsString} from "class-validator";


class BaseCreatePostDto extends OmitType(Post, ['id', 'likes', 'views'] as const){}

export class CreatePostDto extends BaseCreatePostDto {
    @IsString()
    title!: string;

    @IsString()
    content!: string;
}
