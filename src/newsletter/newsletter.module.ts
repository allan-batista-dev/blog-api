import { Module } from '@nestjs/common';
import { NewsletterService } from './newsletter.service';
import { NewsletterController } from './newsletter.controller';
import { PrismaService } from 'src/database/prisma.service';
import { MailerModule } from '@nestjs-modules/mailer';
import { EmailConfigService } from './email-config.service';

@Module({
  controllers: [NewsletterController],
  providers: [NewsletterService, PrismaService],
  imports: [
    MailerModule.forRootAsync({
      useFactory: async (emailConfigService: EmailConfigService) => ({
        transport: emailConfigService.getTransportConfig(),
        defaults: {
          from: emailConfigService.getDefaultFrom(),
        },
      }),
      inject: [EmailConfigService],
    }),
  ],
})
export class NewsletterModule {}
