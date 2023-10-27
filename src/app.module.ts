import { Module } from '@nestjs/common';
import { QuotesModule } from './quotes/quotes.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    QuotesModule,
    MongooseModule.forRoot('mongodb+srv://mario300:mario300@cluster0.qbjsjl8.mongodb.net/')
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
