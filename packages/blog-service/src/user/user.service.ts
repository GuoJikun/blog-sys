import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "src/common/entities/user.entity";
import { Repository } from "typeorm";

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private articleRepository: Repository<User>
    ) {}
    async FindUserByAccountAndPassword(account: string, password: string) {
        return this.articleRepository.findOneBy({
            account: account,
            password: password,
        });
    }
}
