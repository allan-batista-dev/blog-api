import { PartialType } from '@nestjs/mapped-types';
import { CreateThreadNewsletterDto, CreateNewsletterFullBlogDto } from './create-newsletter.dto';

export class UpdateNewsletterFullBlogDto extends PartialType(CreateNewsletterFullBlogDto) { }

export class UpdateThreadNewsletterDto extends PartialType(CreateThreadNewsletterDto) { }

