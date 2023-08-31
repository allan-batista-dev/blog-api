import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { NewsletterService } from './newsletter.service';
import { CreateThreadNewsletterDto, CreateNewsletterFullBlogDto } from './dto/create-newsletter.dto';
import { UpdateNewsletterFullBlogDto, UpdateThreadNewsletterDto } from './dto/update-newsletter.dto';
import { CurrentUser } from 'src/auth/decorators/current-user.decorator';
import { UserEntity } from 'src/user/entities/user.entity';
import { IsPublic } from 'src/auth/decorators/is-public.decorator';
import { threadId } from 'worker_threads';

@Controller('newsletter')
export class NewsletterController {
  constructor(private readonly newsletterService: NewsletterService) { }

  @IsPublic()
  @Post('/ass-newsletter')
  async assNewsLetterFullBlog(@Body()
  createNewsletterFullBlogDto: CreateNewsletterFullBlogDto,
  ) {
    return await this.newsletterService.assNewsLetterFullBlog(createNewsletterFullBlogDto);
  }

  @IsPublic()
  @Get('/ass-newsletter')
  async findAssNewsLetterFullBlog() {
    return await this.newsletterService.findAssNewsLetterFullBlog()
  }

  @IsPublic()
  @Post('/ass-newsletter-thread')
  async assNewsLetterThread(
    createThreadNewsletterDto: CreateThreadNewsletterDto,
  ) {
    return await this.newsletterService.assNewsLetterThread(createThreadNewsletterDto);
  }

  @IsPublic()
  @Get('/ass-newsletter-thread')
  async findAssNewsLetterThread() {
    return await this.newsletterService.findAssNewsLetterThread()
  }

}


