import * as bcrypt from "bcrypt";
import { Injectable, UnauthorizedException } from "@nestjs/common";
import { Response, Request } from "express";
import {EntityManager, Repository} from "typeorm";
import {AuthToken} from "./entities/auth.token";
import {InjectRepository} from "@nestjs/typeorm";
import {CheckResponse} from "./user-response/response/response";

@Injectable()
export class SecurityService {
    constructor(
        @InjectRepository(AuthToken)
        private readonly tokenRepository : Repository<AuthToken>,
        private readonly entityManager: EntityManager
    )
    {}
    async hashPassword(password: string): Promise<string> {
        const saltRounds = 10;
        const salt = await bcrypt.genSalt(saltRounds);
        return await bcrypt.hash(password, salt);
    }

    async comparePasswords(password: string, hashedPassword: string): Promise<boolean> {
        return await bcrypt.compare(password, hashedPassword);
    }

    setCookieToken(res: Response, token: string): void {
        res.cookie('AuthToken', token, {
            httpOnly: true,
            sameSite: 'strict',
            maxAge: 1000 * 60 * 60 * 24 * 3, // 3 days
        });
    }
    getCookieToken(req: Request): string {
        const token = req.cookies['AuthToken'];
        if (!token) {
            throw new UnauthorizedException("Cookie not found");
        }
        return token;
    }

    async isAuth(req : Request, res: Response) : Promise<boolean>{
        const token = this.getCookieToken(req);
        if(!token){
            return false;
        }
        const entity = await this.tokenRepository.findOne({where : {token: token}});
        if(!entity){
            return false;
        }
        const time = entity.expiresAt.getTime() > Date.now();

        if(time){
            return true;
        }
        this.logout(req, res);

        return false;
    }

    async logout(req: Request, res: Response): Promise<boolean> {
        const temp = this.getCookieToken(req);

        // Проверяем наличие токена в базе данных
        const token = await this.tokenRepository.findOne({ where: { token: temp } });

        // Если токена нет, очищаем cookie и возвращаем false
        if (!token) {
            res.clearCookie('AuthToken', {
                httpOnly: true,
                secure: process.env.NODE_ENV === 'production',
                sameSite: 'strict',
            });
            return false;
        }

        await this.tokenRepository.remove(token);

        res.clearCookie('AuthToken', {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict',
        });

        return true;
    }


    async getProfileByToken(token : string){
        if(!token){
            throw new UnauthorizedException("Cookie not found");
        }
        const entity = await this.tokenRepository.findOne({where: {token: token}});
        if(!entity){
            throw new UnauthorizedException("Uncorrect Cookie");
        }
        const data = {
            username : entity.user.username
            //other data
        }
        return data;
    }
    generateAuthToken(): string {
        const seed = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
        let key = "";
        for (let i = 0; i < 64; i++) {
            key += seed[this.getRandomNumber(0, seed.length - 1)];
        }
        return key;
    }

    private getRandomNumber(min: number, max: number): number {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}
