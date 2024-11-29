import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  NotFoundException,
  ParseIntPipe, BadRequestException, Req, Res
} from '@nestjs/common';
import { PostsService } from './posts.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import {Response, Request} from "express";

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Get(':id')
  async getPost(@Param('id', ParseIntPipe) id: number) {
    return await this.postsService.findOne(id);
  }

  @Get()
  async getPostAuthor(@Query('author') author : string){
    if(!author){
      throw new BadRequestException('Author query parameter is required');
    }
    return await this.postsService.findAuthorAll(author);
    //сколько-то постов дать
  }

  @Post()
  async createPost(@Body() createPostDto: CreatePostDto, @Req() req: Request, @Res() res : Response) {
    return this.postsService.create(createPostDto, req, res);
  }

  @Patch(':id')
  async updatePost(@Param('id', ParseIntPipe) id : number, @Body() updatePostDto: UpdatePostDto, @Req() req: Request, @Res() res : Response) {
     return this.postsService.update(id, updatePostDto, req, res);
  }

  @Delete(':id')
  async deletePost(@Param('id',ParseIntPipe) id : number, @Req() req: Request, @Res() res : Response) {
    return this.postsService.delete(id, req, res);
  }
}
