import { Module } from '@nestjs/common';
import {PageModule} from "./page/page.module";
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { DatabaseModule } from './database/database.module';
import {ConfigModule} from "@nestjs/config";
import { PostsModule } from './posts/posts.module';
import { UsersModule } from './users/users.module';

@Module({
   imports: [
       ConfigModule.forRoot({ isGlobal: true }),
       ServeStaticModule.forRoot({
           rootPath: join(__dirname, '..', 'static')
       }),
       PageModule,
       DatabaseModule,
       PostsModule,
       UsersModule,
       ],
   controllers : [],
    providers : []
})
export class AppModule {}