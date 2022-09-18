import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    account: string;

    @Column()
    nickname: string;

    @Column()
    password: string;

    @Column("timestamp")
    createTime: string;

    @Column({ default: true })
    isActive: boolean;
}
