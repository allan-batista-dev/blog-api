import { Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { PrismaService } from 'src/database/prisma.service';
import { PostEntity } from './entities/post.entity';
import { createClient } from '@supabase/supabase-js';
import { threadId } from 'worker_threads';

@Injectable()
export class PostService {
  constructor(private readonly prisma: PrismaService) { }

  async create(createPostDto: CreatePostDto, file: Express.Multer.File, userId: number): Promise<PostEntity> {
    const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY, {
      auth: {
        persistSession: false
      }
    })
    const dataImage = await supabase.storage.from("blog-upload").upload(file.originalname, file.buffer, {
      upsert: true
    })
    const imagePath = dataImage.data.path;

    return this.prisma.post.create({
      data: {
        ...createPostDto,
        file: imagePath,
        userId: userId,
        threadId: threadId
      }
    })
  }

  async findAll(): Promise<PostEntity[]> {
    return this.prisma.post.findMany({
      orderBy: {
        created_at: "desc"
      },
      take: 5,
      skip: 5
    })
  }

  async lastPost(): Promise<PostEntity | null> {
    const posts = await this.prisma.post.findMany({
      include: {
        comments: true
      },
      orderBy: {
        created_at: "desc"
      },
      take: 1
    });

    if (posts.length > 0) {
      return posts[0];
    } else {
      return null;
    }
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
      },
      include: {
        comments: true
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
