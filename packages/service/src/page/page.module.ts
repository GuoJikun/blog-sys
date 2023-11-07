import { Module } from "@nestjs/common";
import { PageController } from "./page.controller";
import { PageService } from "./page.service";
import { ArticleModule } from "src/article/article.module";

@Module({
    imports: [ArticleModule],
    controllers: [PageController],
    providers: [PageService],
})
export class PageModule {}
