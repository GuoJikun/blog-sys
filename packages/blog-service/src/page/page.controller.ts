import { Controller, Get, Param, Render } from "@nestjs/common";
import { PageService } from "./page.service";
import { ArticleService } from "./../article/article.service";

@Controller({
    version: "page",
})
export class PageController {
    constructor(private readonly pageService: PageService, private readonly articleService: ArticleService) {}

    @Get()
    @Render("index")
    async findAll1() {
        const articleList = await this.articleService.findAll();
        return { articleList: articleList };
    }

    @Get("/articles")
    @Render("article")
    async article() {
        const article = await this.articleService.findAll();
        return {
            articleList: article,
        };
    }

    @Get("/articles/:id")
    @Render("article-detail")
    async detail(@Param() params) {
        try {
            const id: any = parseInt(params.id, 10);
            const article = await this.articleService.findOne(id);
            return article;
        } catch (error) {
            throw error;
        }
    }
}
