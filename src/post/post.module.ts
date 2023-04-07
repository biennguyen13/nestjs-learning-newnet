import { Module } from '@nestjs/common';
import { PostService } from './services/post.service';
import { PostController } from './controllers/post.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { PostSchema } from './models/post.model';
import { PostRepository } from './repositories/post.repository';
import { UserModule } from 'src/user/user.module';

@Module({
  imports: [
    // UserModule,
    MongooseModule.forFeature([
      {
        name: 'Post',
        schema: PostSchema,
      },
    ]),
  ],
  providers: [PostService, PostModule, PostRepository],
  controllers: [PostController],
})
export class PostModule {}
