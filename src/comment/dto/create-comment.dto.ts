import { IsNumber, IsOptional, IsString } from "class-validator";

export class CreateCommentDto {

    @IsString()
    text: string;
    
    @IsOptional()
    @IsString()
    nameAuthor: string;

    @IsNumber()
    postId: number;
}
