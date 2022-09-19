import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Article } from "src/common/entities/article.entity";

@Injectable()
export class ArticleService {
    constructor(
        @InjectRepository(Article)
        private articleRepository: Repository<Article>
    ) {}
    findOne(id): Promise<Article> {
        return this.articleRepository.findOneBy({
            id: id,
        });
    }
    findAll(): Promise<Article[]> {
        return this.articleRepository.find();
    }
}
