import {Controller, Get} from '@nestjs/common';
import {PageService} from "./page.service";

@Controller()
export class PageController {
    constructor(private readonly pageService: PageService) {}

    @Get()
    getMainPage() : string {
        return this.pageService.getMainPageContent();
    }
}
