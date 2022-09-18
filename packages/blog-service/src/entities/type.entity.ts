import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Type {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column("timestamp")
    createTime: string;

    @Column({ default: true })
    isActive: boolean;
}
