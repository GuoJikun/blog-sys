import { Controller, Get, HttpCode, Param, Post, Body } from "@nestjs/common";

import { ArticleService } from "./article.service";
import { Article } from "../common/entities/article.entity";
import { CreateArticleDto, FindOneParams, Page } from "./article.dto";

@Controller("article")
export class ArticleController {
    constructor(private readonly articleService: ArticleService) {}

    @Get()
    async findAll(params: Page): Promise<Article[]> {
        return await this.articleService.findAll(params);
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
