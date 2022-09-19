import { TypeService } from "./tag.service";
import { Controller, Get, Version } from "@nestjs/common";
import { Tag } from "src/common/entities/tag.entity";

@Controller("type")
export class TypeController {
    constructor(private readonly typeService: TypeService) {}

    @Get()
    @Version("v1")
    findAll(): Promise<Tag[]> {
        return this.typeService.findAll();
    }
}
