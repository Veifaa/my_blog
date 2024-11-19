import * as bcrypt from "bcrypt";
import {Response, Request} from "express";
import {UnauthorizedException} from "@nestjs/common";


export class UserSecurity {
    static async hashPassword(password: string) : Promise<string> {
        const saltRounds = 10; // Количество раундов соли (рекомендуется >= 10)
        const salt = await bcrypt.genSalt(saltRounds); // Генерация соли
        return await bcrypt.hash(password, salt);;
    }
    static async comparePasswords(password: string, hashedPassword: string): Promise<boolean> {
        return await bcrypt.compare(password, hashedPassword);
    }

    static setCookieToken(res : Response, token : string) : void {
        res.cookie('AuthToken', token,{
            httpOnly:true,
            // secure:true, to https
            sameSite: 'strict',
            maxAge: 1000 * 60 * 60 * 24 * 3
        })
    }

    static getCookieToken(req : Request) : Promise<string>{
        const token = req.cookies['AuthToken'];
        if(!token){
            throw new UnauthorizedException("Cookie not found");
        }
        return token;
    }
    static generateAuthToken() : string {
        const seed = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

        let key = "";
        for(let i = 0; i < 64; i++){
            key+= seed[this.getRandomNumber(0, seed.length - 1)];
        }
        return key;
    }
    private static getRandomNumber(min: number, max: number): number {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

}