import { Module } from "@nestjs/common";
import { CommentsService } from "./comments.service";
import { CommentsController } from "./comments.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Comments } from "src/common/entities/comments.entity";

@Module({
    imports: [TypeOrmModule.forFeature([Comments])],
    exports: [TypeOrmModule],
    providers: [CommentsService],
    controllers: [CommentsController],
})
export class CommentsModule {}
