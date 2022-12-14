import { IsNotEmpty, IsNumberString } from "class-validator";
import { Pager } from "../common/dto/public.dto";

export class CreateArticleDto {
    @IsNotEmpty()
    title: string;
    @IsNotEmpty()
    content: string;
    @IsNotEmpty()
    creator: string;
    @IsNotEmpty()
    creatorId: number;
    @IsNotEmpty()
    createTime: string;
}

export class UpdateArticleDto {
    @IsNotEmpty()
    @IsNumberString()
    id: number;
    @IsNotEmpty()
    title: string;
    @IsNotEmpty()
    content: string;
    @IsNotEmpty()
    updatePerson: string;
    @IsNotEmpty()
    updatePersonId: number;
    @IsNotEmpty()
    updateTime: string;
}

export class FindOneParams {
    @IsNumberString()
    id: number;
}

export class Page extends Pager {}
