import { Controller, Get } from '@nestjs/common';
import { QuotesService } from './quotes.service';

@Controller('quotes')
export class QuotesController {
    
    constructor(private quotesService: QuotesService) {}
    
    @Get()
    randomQuote() {
        return this.quotesService.getRandomQuote()
    }
}
