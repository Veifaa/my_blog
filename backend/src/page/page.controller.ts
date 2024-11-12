import {Controller, Get, Res} from '@nestjs/common';
import {PageService} from "./page.service";
import { join } from 'path';
import { Response } from 'express';


@Controller()
export class PageController {
    constructor(private readonly pageService: PageService) {}

    @Get()
    getMainPage(@Res() res : Response) : void {
        res.sendFile(join(__dirname, '..', '..', 'static', 'page', 'main.html'));
    }

}
