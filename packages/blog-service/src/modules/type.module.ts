import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { TypeController } from "src/controllers/type.controller";
import { Type } from "src/entities/type.entity";
import { TypeService } from "../services/type.service";

@Module({
    imports: [TypeOrmModule.forFeature([Type])],
    exports: [TypeOrmModule],
    providers: [TypeService],
    controllers: [TypeController],
})
export class TypeModule {}
