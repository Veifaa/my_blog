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
  ParseIntPipe, BadRequestException
} from '@nestjs/common';
import { PostsService } from './posts.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';

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
  }

  @Post()
  async createPost(@Body() createPostDto: CreatePostDto) {
    return this.postsService.create(createPostDto);
  }

  @Patch(':id')
  async updatePost(@Param('id', ParseIntPipe) id : number, @Body() updatePostDto: UpdatePostDto) {
     return this.postsService.update(id, updatePostDto);
  }

  @Delete(':id')
  async deletePost(@Param('id',ParseIntPipe) id : number) {
    return this.postsService.delete(id);
  }
}
