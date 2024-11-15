import {Injectable, NotFoundException} from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import {EntityManager, Repository} from "typeorm";
import {Post} from "./entities/post.entity";
import {InjectRepository} from "@nestjs/typeorm";

@Injectable()
export class PostsService {
  constructor(
      @InjectRepository(Post)
      private readonly postRepository: Repository<Post>,
      private readonly entityManager: EntityManager) {}

  async create(createPostDto: CreatePostDto) {
    const post = new Post(createPostDto);
    await this.entityManager.save(post);
  }

  async findAll() {
    return this.postRepository.find();
  }

  async findOne(id: number) {
    return this.postRepository.findBy({id});
  }

  async update(id: number, updatePostDto: UpdatePostDto) {
    const post = await this.postRepository.findOne({where : {id}});

    if(!post){
      throw new NotFoundException(`Post with id ${id} not found`);
    }

    if(!(updatePostDto.title || updatePostDto.content)){
      throw new NotFoundException(`exception`);
    }


    if(updatePostDto.title){
      post.title = updatePostDto.title;
    }

    if(updatePostDto.content){
      post.content = updatePostDto.content;
    }


    await this.entityManager.save(post);

  }

  async remove(id: number) {
    const post = await this.postRepository.findOne({where : {id}});
    if(!post) return;
    await this.entityManager.remove(post);
  }
}
