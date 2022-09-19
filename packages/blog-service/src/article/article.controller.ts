import { Controller, Get, Param } from "@nestjs/common";

import { ArticleService } from "./article.service";
import { Article } from "../common/entities/article.entity";

@Controller("article")
export class ArticleController {
    constructor(private readonly articleService: ArticleService) {}

    @Get()
    findAll(): Promise<Article[]> {
        return this.articleService.findAll();
    }

    @Get("/:id")
    fineOne(@Param() params): Promise<Article> {
        return this.articleService.findOne(params.id);
    }
}
