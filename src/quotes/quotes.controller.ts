import { Controller, Get, Res, HttpStatus, Post, Body } from '@nestjs/common';
import { QuotesService } from './quotes.service';

import { CreateQuoteDTO } from './dto/quote.dto';

@Controller('quotes')
export class QuotesController {
    
    constructor(private quotesService: QuotesService) {}
    
    @Post('/create')
    async createQuote(@Res() res, @Body() createProductDTO: CreateQuoteDTO) {
        const quote = await this.quotesService.createQuote(createProductDTO);
        return res.status(HttpStatus.OK).json({
            message: 'Product Successfully Created',
            quote
        });
    }

    @Get('/random')
    randomQuote() {
        return this.quotesService.getRandomQuote()
    }
}
