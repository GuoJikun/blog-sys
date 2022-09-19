import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ArticleController } from "./article.controller";
import { ArticleService } from "./article.service";
import { Article } from "src/common/entities/article.entity";

@Module({
    imports: [TypeOrmModule.forFeature([Article])],
    exports: [TypeOrmModule, ArticleService],
    controllers: [ArticleController],
    providers: [ArticleService],
})
export class ArticleModule {}
