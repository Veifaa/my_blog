import { Module } from '@nestjs/common';
import { PageModule } from './page/page.module';

@Module({
   imports: [PageModule],
   controllers : [],
    providers : []
})
export class AppModule {}