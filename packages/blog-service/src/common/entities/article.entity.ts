import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Article {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column("text")
    content: string;

    @Column()
    creator: string;

    @Column()
    creatorId: number;

    @Column({
        type: "timestamp",
        default: new Date().toLocaleString(),
    })
    createTime: string;

    @Column()
    updatePerson: string;

    @Column()
    updatePersonId: number;

    @Column({
        type: "timestamp",
        default: new Date().toLocaleString(),
    })
    updateTime: string;

    @Column({ default: true })
    isActive: boolean;
}
