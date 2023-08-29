import { IsNumber, IsOptional, IsString } from "class-validator";

export class CreatePostDto {

    @IsOptional()
    @IsString()
    file: string;

    @IsString()
    title: string;

    @IsString()
    content: string;

    @IsOptional()
    @IsNumber()
    userId: number;

    @IsOptional()
    @IsString()
    subtitle: string;

}
