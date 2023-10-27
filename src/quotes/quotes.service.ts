import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Quote } from './interfaces/quote.interface';
import { Model } from 'mongoose';
import { CreateQuoteDTO } from './dto/quote.dto';

@Injectable()
export class QuotesService {

    constructor(
        @InjectModel('Quote')
        private readonly quoteModel: Model<Quote>
    ) {}

    async getRandomQuote(): Promise<Quote> {
        const count = await this.quoteModel.countDocuments().exec();
        const random = Math.floor(Math.random() * count);
        const randomQuote = await this.quoteModel.findOne().skip(random).exec();
        return randomQuote;
    }

    async createQuote(createQuoteDTO: CreateQuoteDTO): Promise<Quote> {
        const newQuote = new this.quoteModel(createQuoteDTO);
        return newQuote.save();
    }
}
