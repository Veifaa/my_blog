import {BadRequestException, Injectable, NotFoundException} from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import {EntityManager, Repository} from "typeorm";
import {Post} from "./entities/post.entity";
import {InjectRepository} from "@nestjs/typeorm";
import {User} from "../users/entities/user.entity";
import {SecurityService} from "../users/user-security.service";
import {Request, Response} from "express";
import {AuthToken} from "../users/entities/auth.token";

@Injectable()
export class PostsService {
  constructor(
      private readonly securityService: SecurityService,
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
  async findAuthorsPosts(author : string, page : number, limit : number){
    const authorUser = await this.userRepository.findOne({ where: { username: author } });
    if (!authorUser) {
      throw new NotFoundException("Author not found");
    }

    const offset = limit * (page - 1);

    const [posts, totalPosts] = await this.postRepository.findAndCount({
      where: { user: authorUser }, // Фильтруем по автору
      skip: offset,
      take: limit,
      order: { id: 'asc' },
    });

    const totalPages = Math.ceil(totalPosts / limit);

    return {
      posts : posts,
      totalPage: totalPages,
      limit : limit,
    };
  }

  async create(createPostDto: CreatePostDto, req : Request, res : Response): Promise<void> {

    let currentUser;

    try{
      currentUser = await this.securityService.getUserByCookie(req, res);
    }
    catch(err){
      res.status(401).send('Invalid authentication');
      return;
    }


    const post = this.entityManager.create(Post, {
      ...createPostDto,
      user : currentUser
    });

    try {
      await this.entityManager.save(post);
      res.status(201).send('Successfully created post');
    } catch (error) {
      throw new NotFoundException('Failed to save the post');
    }
  }
  async update(id: number, updatePostDto: UpdatePostDto, req : Request, res : Response): Promise<void> {
    let currentUser;

    try {
      currentUser = await this.securityService.getUserByCookie(req, res);
    }
    catch (err){
      res.status(401).send('Invalid authentication');
      return;
    }

    const post = await this.postRepository.findOne({
      where : {id : id},
      relations: ['user']
    });
    if(!post){
      throw new NotFoundException('Post not found');
    }

    if(post.user.username !== currentUser.username){
      throw new BadRequestException('You cant change this post');
    }

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

    res.status(200).send('Post succsessfully changed');
  }

  async delete(id: number, req : Request, res : Response): Promise<void> {
    let currentUser;

    try {
      currentUser = await this.securityService.getUserByCookie(req, res);
    }
    catch (err){
      res.status(401).send('Invalid authentication');
      return;
    }

    const post = await this.postRepository.findOne({where : {id}, relations : ['user']});
    if(!post) return;

    if(post.user !== currentUser){
      throw new BadRequestException('You cant change this post');
    }

    await this.entityManager.remove(post);
  }
}
