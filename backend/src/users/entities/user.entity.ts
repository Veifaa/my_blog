import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {Post} from "../../posts/entities/post.entity";
import {AuthToken} from "./auth.token";


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

    @Column({nullable:true})
    profilePic !: string

    @OneToMany(() => Post, (post) => post.user, {onDelete: "CASCADE"})
    posts !: Post[];

    @OneToMany(() => AuthToken, (token) => token.user, {onDelete: "CASCADE"})
    tokens !: AuthToken[];

    constructor(user:Partial<User>) {
        Object.assign(this, user);
    }
}
