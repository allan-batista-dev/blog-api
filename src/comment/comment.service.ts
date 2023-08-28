import { Injectable } from '@nestjs/common';
import { CreateCommentDto } from './dto/create-comment.dto';
import { CommentEntity } from './entities/comment.entity';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class CommentService {
  constructor(private readonly prisma: PrismaService) { }

  async create(createCommentDto: CreateCommentDto): Promise<CommentEntity> {
    return this.prisma.comment.create({
      data: createCommentDto
    })
  }

  async findAll(): Promise<CommentEntity[]> {
    return this.prisma.comment.findMany()
  }

  async findOne(id: number): Promise<CommentEntity> {
    const existComment = this.prisma.comment.findUnique({
      where: {
        id
      }
    })

    if (!existComment) {
      throw new Error(`Comment id:${id} does not exist`)
    }

    return existComment;
  }

  async remove(id: number): Promise<CommentEntity> {
    const existComment = this.prisma.comment.findUnique({
      where: {
        id
      }
    })
    if (!existComment) {
      throw new Error(`Comment id:${id} does not exist`)
    }

    return this.prisma.comment.delete({
      where: {
        id
      }
    })
  }
}
