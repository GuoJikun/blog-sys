import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Article } from "src/common/entities/article.entity";
import { CreateArticleDto, Page } from "./article.dto";

@Injectable()
export class ArticleService {
    constructor(
        @InjectRepository(Article)
        private articleRepository: Repository<Article>
    ) {}
    findOne(id: number): Promise<Article> {
        return this.articleRepository.findOneBy({
            id: id,
        });
    }
    findAll(params: Page): Promise<Article[]> {
        return this.articleRepository.find({
            select: ["title", "abstract", "id", "creator"],
            order: {
                id: "DESC",
            },
            skip: params.page,
            take: params.size,
        });
    }

    findByLimit(params: Page): Promise<Article[]> {
        return this.articleRepository.find({
            select: ["title", "abstract", "id", "creator"],
            order: {
                id: "DESC",
            },
            skip: params.page,
            take: params.size,
        });
    }

    add(data: CreateArticleDto) {
        this.articleRepository.insert(data);
    }
}
