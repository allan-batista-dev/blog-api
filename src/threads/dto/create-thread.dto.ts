import { IsBoolean, IsOptional, IsString } from "class-validator";

export class CreateThreadDto {

    @IsString()
    title: string;

    @IsOptional()
    @IsBoolean()
    isActive: boolean;

}
