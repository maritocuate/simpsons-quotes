import { Injectable } from '@nestjs/common';
import { Quote } from './quote.entity';

@Injectable()
export class QuotesService {

    private quotes: Quote[] = [
        {
            id: 1,
            text: 'Shoplifting Is A Victimless Crime. Like Punching Someone In The Dark.',
            author: 'Nelson Muntz'
        },
        {
            id: 2,
            text: `I’d Rather Let A Thousand Guilty Men Go Free Than Chase After Them.`,
            author: 'Chief Wiggum'
        },
        {
            id: 3,
            text: `Me Fail English? That's Unpossible`,
            author: 'Ralph Wiggum'
        },
        {
            id: 4,
            text: `Everything’s Coming Up Milhouse!`,
            author: 'Milhouse Van Houten'
        },
    ]

    getRandomQuote() {
        return this.quotes[Math.floor(Math.random() * this.quotes.length)]
    }
}
