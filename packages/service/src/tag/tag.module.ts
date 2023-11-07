import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { TypeController } from "src/tag/tag.controller";
import { Tag } from "src/common/entities/tag.entity";
import { TypeService } from "./tag.service";

@Module({
    imports: [TypeOrmModule.forFeature([Tag])],
    exports: [TypeOrmModule],
    providers: [TypeService],
    controllers: [TypeController],
})
export class TypeModule {}
