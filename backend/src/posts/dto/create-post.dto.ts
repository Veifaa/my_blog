import {Post} from "../entities/post.entity";
import {OmitType, PartialType} from "@nestjs/mapped-types";


class BaseCreatePostDto extends OmitType(Post, ['id'] as const){}

export class CreatePostDto extends BaseCreatePostDto {}
