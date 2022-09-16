import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { FindOneOptions, Repository } from "typeorm";
import { Article } from "src/entities/article.entity";

@Injectable()
export class ArticleService {
    constructor(
        @InjectRepository(Article)
        private articleRepository: Repository<Article>
    ) {}
    getHello(): string {
        return "Hello World!";
    }
    findOne(id: FindOneOptions<Article>): Promise<Article> {
        return this.articleRepository.findOne(id);
    }
    findAll(): Promise<Article[]> {
        return this.articleRepository.find();
    }
}
