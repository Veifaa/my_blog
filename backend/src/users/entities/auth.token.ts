import {Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {User} from "./user.entity";

@Entity()
export class AuthToken {
    @PrimaryGeneratedColumn()
    id !: number;

    @Column()
    token !: string;

    @ManyToOne(type => User, (user : User) => user.tokens, {onDelete: "CASCADE"})
    user!: User;

    @CreateDateColumn()
    createdAt !: Date;

    @Column({ type: 'timestamp', nullable: true })
    expiresAt !: Date; // Optional expiration time
}
