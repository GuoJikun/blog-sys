import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ArticleController } from "../controllers/article.controller";
import { ArticleService } from "../services/article.service";
import { Article } from "src/entities/article.entity";

@Module({
    imports: [TypeOrmModule.forFeature([Article])],
    exports: [TypeOrmModule],
    controllers: [ArticleController],
    providers: [ArticleService],
})
export class ArticleModule {}
