import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { ServeStaticModule } from "@nestjs/serve-static";
import { ConfigModule } from "@nestjs/config";
import { join } from "node:path";
import dbConfig from "./config/db";
import { TypeOrmModule } from "@nestjs/typeorm";
import * as Joi from "@hapi/joi";

import { ArticleModule } from "./modules/article.module";

@Module({
    imports: [
        ServeStaticModule.forRoot({
            rootPath: join(__dirname, "..", "client"),
            exclude: ["/api*"],
        }),
        ConfigModule.forRoot({
            isGlobal: true,
            validationSchema: Joi.object({
                NODE_ENV: Joi.string().valid("development", "production", "test").default("development"),
                PORT: Joi.number().default(3000),
            }),
        }),
        TypeOrmModule.forRoot(dbConfig),
        ArticleModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
