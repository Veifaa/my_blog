import { Injectable } from '@nestjs/common';

@Injectable()
export class PageService {
    getMainPageContent(){
        return `Hello, this is main Page!`;
    }
}
