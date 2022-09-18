import { TypeService } from "./../services/type.service";
import { Controller, Get, Version } from "@nestjs/common";
import { Type } from "src/entities/type.entity";

@Controller("type")
export class TypeController {
    constructor(private readonly typeService: TypeService) {}

    @Get()
    @Version("v1")
    findAll(): Promise<Type[]> {
        return this.typeService.findAll();
    }
}
