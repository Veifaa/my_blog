import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {Post} from "../../posts/entities/post.entity";


@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id !: number;

    @Column()
    username !: string;

    @Column()
    hash !: string;

    @Column()
    mail !: string;

    @OneToMany(() => Post, (post) => post.user, {onDelete: "CASCADE"})
    posts !: Post[];

    constructor(user:Partial<Post>) {
        Object.assign(this, user);
    }
}
