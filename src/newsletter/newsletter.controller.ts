import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { NewsletterService } from './newsletter.service';
import { CreateNewsletterDto } from './dto/create-newsletter.dto';
import { UpdateNewsletterDto } from './dto/update-newsletter.dto';

@Controller('newsletter')
export class NewsletterController {
  constructor(private readonly newsletterService: NewsletterService) {}

  @Post('subscribe')
  async subscribeToNewsletter(
    @Body('email') email: string,
    @Body('message') message: string,
  ) {
    await this.newsletterService.sendNewsletter(email, message);
    return 'Inscrição na newsletter realizada com sucesso!';
  }
  
}
