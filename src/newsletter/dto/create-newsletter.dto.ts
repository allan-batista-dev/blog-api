import { IsEmail, IsNumber, IsOptional } from "class-validator";

export class CreateNewsletterFullBlogDto {

    @IsOptional()
    @IsNumber()
    usersId: number;

    @IsEmail()
    email: string;
}

export class CreateThreadNewsletterDto {

    @IsEmail()
    email: string;

    @IsNumber()
    threadId: number;
}
