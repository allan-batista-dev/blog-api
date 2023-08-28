import { IsNumber, IsString } from "class-validator";

export class CreatePostDto {

    @IsString()
    image: string;

    @IsString()
    title: string;

    @IsString()
    content: string;

    @IsNumber()
    userId: number;
}
