import { Module } from '@nestjs/common';
import {PageModule} from "./page/page.module";
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
   imports: [
       ServeStaticModule.forRoot({
           rootPath: join(__dirname, '..', 'static')
       }),
       PageModule],
   controllers : [],
    providers : []
})
export class AppModule {}