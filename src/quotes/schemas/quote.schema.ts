import { Schema } from "mongoose";

export const QuoteSchema = new Schema({
    text: String,
    author: String,
    createdAt: { type: Date, default: Date.now }
});
