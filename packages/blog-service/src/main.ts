import { NestFactory } from "@nestjs/core";
import { NestExpressApplication } from "@nestjs/platform-express";
import { AppModule } from "./app.module";
import { join } from "node:path";
import { VersioningType } from "@nestjs/common";

async function bootstrap() {
    const app = await NestFactory.create<NestExpressApplication>(AppModule);
    app.setBaseViewsDir(join(__dirname, "..", "views"));
    app.setViewEngine("hbs");
    app.enableVersioning({
        type: VersioningType.URI,
    });
    await app.listen(3000);
}
bootstrap();
