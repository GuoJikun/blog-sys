import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Comments {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    articleId: number;

    @Column()
    target: string;

    @Column()
    creator: string;

    @Column("timestamp")
    createTime: string;

    @Column({ default: true })
    isActive: boolean;
}
