import { Controller, Get, HttpCode, Param, Post, Body } from "@nestjs/common";

import { ArticleService } from "./article.service";
import { Article } from "../common/entities/article.entity";
import { CreateArticleDto, FindOneParams } from "./article.dto";

@Controller("article")
export class ArticleController {
    constructor(private readonly articleService: ArticleService) {}

    @Get()
    findAll(): Promise<Article[]> {
        return this.articleService.findAll();
    }

    @Get("/:id")
    fineOne(@Param() params: FindOneParams): Promise<Article> {
        return this.articleService.findOne(params.id);
    }

    @Post("/add")
    @HttpCode(200)
    add(@Body() createArticleDto: CreateArticleDto) {
        const data = createArticleDto;
        this.articleService.add(data);
    }
}
