import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Post {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    title!: string;

    @Column()
    content!: string;

    @Column({default: 0})
    views!: number;

    @Column({default: 0})
    likes!: number;

    constructor(Post:Partial<Post>) {
        Object.assign(this, Post);
    }
}
