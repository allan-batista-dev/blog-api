import { Injectable } from '@nestjs/common';
import { CreateNewsletterDto } from './dto/create-newsletter.dto';
import { UpdateNewsletterDto } from './dto/update-newsletter.dto';
import { MailerService } from '@nestjs-modules/mailer';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class NewsletterService {
  constructor(
    private readonly mailerService: MailerService,
    private readonly prisma: PrismaService
  ) { }

  async sendNewsletter(email: string, message: string) {
    await this.mailerService.sendMail({
      to: email,
      subject: 'Newsletter',
      template: './newsletter', // Nome do arquivo Pug do template
      context: { message }, // Dados a serem passados para o template Pug
    });
  }
}
