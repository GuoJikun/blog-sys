import { Controller, Get, Render, Version } from "@nestjs/common";
import { AppService } from "./app.service";

@Controller()
export class AppController {
    constructor(private readonly appService: AppService) {}

    @Get()
    @Version("1")
    getHello(): string {
        return this.appService.getHello();
    }

    @Get("/index")
    @Render("index")
    root() {
        return { message: "Hello world!" };
    }

    @Get()
    @Version("2")
    getHelloV2(): string {
        return "v2 版本";
    }
}
