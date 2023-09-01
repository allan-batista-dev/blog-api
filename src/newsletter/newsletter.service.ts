import { Injectable } from '@nestjs/common';
import { CreateNewsletterFullBlogDto, CreateThreadNewsletterDto } from './dto/create-newsletter.dto';
import { UpdateNewsletterFullBlogDto, UpdateThreadNewsletterDto } from './dto/update-newsletter.dto';
import { PrismaService } from 'src/database/prisma.service';
import { NewsLetterFullBlogSubscriptionEntity, ThreadNewsletterSubscriptionEntity } from './entities/newsletter.entity';

@Injectable()
export class NewsletterService {
  constructor(
    private readonly prisma: PrismaService
  ) { }

  async assNewsLetterFullBlog
    (createNewsletterFullBlogDto: CreateNewsletterFullBlogDto,
    ): Promise<NewsLetterFullBlogSubscriptionEntity> {
    return await this.prisma.newsLetterFullBlogSubscription.create({
      data: createNewsletterFullBlogDto
    })
  }

  // async assNewsLetterThread(
  //   createThreadNewsletterDto: CreateThreadNewsletterDto,
  // ): Promise<ThreadNewsletterSubscriptionEntity> {
  //   // Primeiro, verifique se a thread com o ID especificado existe
  //   const thread = await this.prisma.thread.findUnique({
  //     where: {
  //       id: createThreadNewsletterDto.threadId // Certifique-se de passar o ID correto da thread aqui
  //     }
  //   });

  //   if (!thread) {
  //     throw new Error('Thread does not exist');
  //   }

  //   // Agora, crie a assinatura da newsletter relacionada à thread
  //   const newsletterSubscription = await this.prisma.threadNewsletterSubscription.create({
  //     data: {
  //       email: createThreadNewsletterDto.email,
  //       thread: {
  //         connect: {
  //           id: thread.id
  //         }
  //       }
  //     }
  //   });

  //   return newsletterSubscription;
  // }

  async findAssNewsLetterFullBlog(): Promise<NewsLetterFullBlogSubscriptionEntity[]> {
    return await this.prisma.newsLetterFullBlogSubscription.findMany()
  }

  async findAssNewsLetterThread(): Promise<ThreadNewsletterSubscriptionEntity[]> {
    return await this.prisma.threadNewsletterSubscription.findMany()
  }

}
