import { Article } from "../entities/article.entity";
import { Controller, Get, Param, Render, Version } from "@nestjs/common";

import { ArticleService } from "../services/article.service";

@Controller("article")
export class ArticleController {
    constructor(private readonly articleService: ArticleService) {}

    @Get()
    @Version("v1")
    findAll(): Promise<Article[]> {
        return this.articleService.findAll();
    }

    @Get()
    @Version("client")
    @Render("index")
    async findAll1() {
        const articleList = await this.articleService.findAll();
        return { articleList: articleList };
    }

    @Get("/:id")
    @Version("client")
    @Render("article")
    root(@Param() params) {
        const article = this.articleService.findOne(params.id);
        return article;
    }

    @Get("/:id")
    @Version("v1")
    fineOne(@Param() params): Promise<Article> {
        console.log(params.id);
        return this.articleService.findOne(params.id);
    }
}
