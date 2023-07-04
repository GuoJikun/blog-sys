import { HttpAdapterHost, NestFactory } from "@nestjs/core";
import { NestExpressApplication } from "@nestjs/platform-express";
import { AppModule } from "./app.module";
import { join } from "node:path";
import { ValidationPipe, VersioningType } from "@nestjs/common";
import { TransformInterceptor } from "./common/interceptors/transform.interceptor";
import { ErrorsInterceptor } from "./common/interceptors/errors.interceptor";
import { AllExceptionsFilter } from "./common/exceptions/base.exception.filter";
import { HttpExceptionFilter } from "./common/exceptions/http.exception.filter";

async function bootstrap() {
    const app = await NestFactory.create<NestExpressApplication>(AppModule);
    // app.enableCors();
    app.useGlobalPipes(new ValidationPipe());
    app.useStaticAssets(join(__dirname, "..", "public"));
    app.setBaseViewsDir(join(__dirname, "..", "views"));
    app.setViewEngine("ejs");
    app.enableVersioning({
        defaultVersion: "v1",
        type: VersioningType.URI,
        prefix: "",
    });
    app.useGlobalInterceptors(new TransformInterceptor(), new ErrorsInterceptor());
    const httpAdapter = app.get(HttpAdapterHost);
    app.useGlobalFilters(new AllExceptionsFilter(httpAdapter), new HttpExceptionFilter());

    await app.listen(3000);
}
bootstrap();
