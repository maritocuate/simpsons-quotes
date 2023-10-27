import { Document } from "mongoose";

export interface Quote extends Document {
    readonly text: string;
    readonly author: string;
    readonly createdAt: Date;
}