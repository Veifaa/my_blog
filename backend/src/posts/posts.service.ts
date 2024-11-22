import {BadRequestException, Injectable, NotFoundException} from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import {EntityManager, Repository} from "typeorm";
import {Post} from "./entities/post.entity";
import {InjectRepository} from "@nestjs/typeorm";
import {User} from "../users/entities/user.entity";

@Injectable()
export class PostsService {
  constructor(
      @InjectRepository(Post)
      private readonly postRepository: Repository<Post>,
      @InjectRepository(User)
      private readonly userRepository: Repository<User>,
      private readonly entityManager: EntityManager) {}

  async findOne(id: number) {
    const post = await this.postRepository.findOne({where : {id : id}});
    if(!post){
      throw new BadRequestException('Post not found');
    }
    return post;
  }
  async findAuthorAll(author : string){
    const authorUser = await this.userRepository.findOne({ where: { username: author } });
    if (!authorUser) {
      throw new NotFoundException("Author not found");
    }
    return await this.postRepository.find({ where: { user: authorUser } });
  }

  async create(createPostDto: CreatePostDto): Promise<void> {
    const currentUser = await this.userRepository.findOne({ where: { username: createPostDto.username } });

    if(!currentUser) {
      throw new NotFoundException("User not found");
    }

    const post = this.entityManager.create(Post, {
      ...createPostDto,
      user: currentUser,
    });

    try {
      await this.entityManager.save(post);
    } catch (error) {
      throw new NotFoundException('Failed to save the post');
    }
  }
  async update(id: number, updatePostDto: UpdatePostDto): Promise<void> {
    const result = await this.entityManager
        .createQueryBuilder()
        .update(Post)
        .set(updatePostDto)
        .where('id = :id', { id })
        .returning('*') // Return the updated post
        .execute();

    if (result.affected === 0) {
      throw new NotFoundException('Post not found');
    }
  }

  async delete(id: number) {
    const post = await this.postRepository.findOne({where : {id}});
    if(!post) return;
    await this.entityManager.remove(post);
  }
}
