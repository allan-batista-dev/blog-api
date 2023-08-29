import { Controller, Get, Post, Body, Patch, Param, Delete, UploadedFile, UseInterceptors } from '@nestjs/common';
import { PostService } from './post.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { IsPublic } from 'src/auth/decorators/is-public.decorator';
import { FileInterceptor } from '@nestjs/platform-express';
import { Multer } from 'multer';
import { CurrentUser } from 'src/auth/decorators/current-user.decorator';
import { UserEntity } from 'src/user/entities/user.entity';

@Controller('post')
export class PostController {
  constructor(private readonly postService: PostService) { }

  @Post()
  @UseInterceptors(FileInterceptor('file'))
  async create(
    @Body() 
    createPostDto: CreatePostDto,
     @UploadedFile() file,
     @CurrentUser() user: UserEntity
     ) {

    const currentUser = user.id;
    const post = await this.postService.create(createPostDto, file, currentUser);
  
    return post;
  }

  @IsPublic()
  @Get()
  async findAll() {
    return await this.postService.findAll();
  }

  @IsPublic()
  @Get('/last-post')
  async findLastPost() {
    return await this.postService.lastPost();
  }

  @IsPublic()
  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.postService.findOne(+id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updatePostDto: UpdatePostDto) {
    return await this.postService.update(+id, updatePostDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.postService.remove(+id);
  }
}
