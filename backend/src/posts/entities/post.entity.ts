import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {User} from "../../users/entities/user.entity";

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

    @ManyToOne(() => User, (user) => user.posts, {cascade : true})
    user !: User;

    constructor(Post:Partial<Post>) {
        Object.assign(this, Post);
    }
}
