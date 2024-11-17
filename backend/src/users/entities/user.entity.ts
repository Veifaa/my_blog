import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";
import {Post} from "../../posts/entities/post.entity";


@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id !: number;

    @Column()
    username !: string;

    @Column()
    hash !: string;

    @Column({default : 'example@example.com'})
    mail ?: string;

    constructor(user:Partial<Post>) {
        Object.assign(this, user);
    }
}
