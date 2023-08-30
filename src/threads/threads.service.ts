import { Injectable } from '@nestjs/common';
import { CreateThreadDto } from './dto/create-thread.dto';
import { UpdateThreadDto } from './dto/update-thread.dto';
import { PrismaService } from 'src/database/prisma.service';
import { ThreadEntity } from './entities/thread.entity';

@Injectable()
export class ThreadsService {
  constructor(private readonly prisma: PrismaService) { }

  async create(createThreadDto: CreateThreadDto, userId: number): Promise<ThreadEntity> {
    return this.prisma.thread.create({
      data: createThreadDto
    })
  }

  async findAll(): Promise<ThreadEntity[]> {
    return this.prisma.thread.findMany()
  }

  async findOne(id: number): Promise<ThreadEntity> {
    return this.prisma.thread.findUnique({
      where: {
        id
      }
    })
  }

  async update(id: number, updateThreadDto: UpdateThreadDto, userId: number): Promise<ThreadEntity> {
    const threadsExist = this.prisma.thread.findUnique({
      where: {
        id
      }
    })
    if (!threadsExist) {
      throw new Error(`Threads ${id} does not exist`)
    }

    return this.prisma.thread.update({
      where: {
        id
      },
      data: updateThreadDto
    })
  }

  async remove(id: number, userId: number): Promise<ThreadEntity> {
    const threadsExist = this.prisma.thread.findUnique({
      where: {
        id
      }
    })
    if (!threadsExist) {
      throw new Error(`Threads ${id} does not exist`)
    }

    return this.prisma.thread.delete({
      where: {
        id
      }
    })
    return
  }
}
