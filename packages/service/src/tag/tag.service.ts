import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Tag } from "src/common/entities/tag.entity";
import { Repository } from "typeorm";

@Injectable()
export class TypeService {
    constructor(
        @InjectRepository(Tag)
        private data: Repository<Tag>
    ) {}

    findAll(): Promise<Tag[]> {
        return this.data.find();
    }
}
