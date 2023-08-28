import { Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { PrismaService } from 'src/database/prisma.service';
import { PostEntity } from './entities/post.entity';

@Injectable()
export class PostService {
  constructor(private readonly prisma: PrismaService) { }

  async create(createPostDto: CreatePostDto): Promise<PostEntity> {
    return this.prisma.post.create({
      data: createPostDto
    })
  }

  async findAll(): Promise<PostEntity[]> {
    return this.prisma.post.findMany()
  }

  async findOne(id: number): Promise<PostEntity> {
    const existPost = this.prisma.post.findUnique({
      where: {
        id
      }
    })

    if (!existPost) {
      throw new Error(`This post ${id} does not exist`)
    }

    return this.prisma.post.findUnique({
      where: {
        id
      }
    })
  }

  async update(id: number, updatePostDto: UpdatePostDto): Promise<PostEntity> {
    const existPost = this.prisma.post.findUnique({
      where: {
        id
      }
    })

    if (!existPost) {
      throw new Error(`This post ${id} does not exist`)
    }

    return this.prisma.post.update({
      where: {
        id
      },
      data: updatePostDto
    })
  }

  async remove(id: number): Promise<PostEntity> {
    const existPost = this.prisma.post.findUnique({
      where: {
        id
      }
    })

    if (!existPost) {
      throw new Error(`This post ${id} does not exist`)
    }

    return this.prisma.post.delete({
      where: {
        id
      }
    })
  }

}
