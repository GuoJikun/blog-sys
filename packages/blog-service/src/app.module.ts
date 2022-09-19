import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { ConfigModule } from "@nestjs/config";
import dbConfig from "./common/config/db";
import { TypeOrmModule } from "@nestjs/typeorm";
import * as Joi from "@hapi/joi";

import { ArticleModule } from "./article/article.module";
import { TypeModule } from "./tag/tag.module";
import { UserModule } from "./user/user.module";
import { PageModule } from "./page/page.module";

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
            validationSchema: Joi.object({
                NODE_ENV: Joi.string().valid("development", "production", "test").default("development"),
                PORT: Joi.number().default(3000),
            }),
        }),
        TypeOrmModule.forRoot(dbConfig),
        ArticleModule,
        UserModule,
        TypeModule,
        PageModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
