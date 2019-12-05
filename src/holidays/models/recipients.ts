import { IsNotEmpty, IsEmail } from 'class-validator';

export interface Recipient {
    id: string;
    name: string;
    email: string;
}

export class RecipientCreate {
    @IsNotEmpty()
    name: string;
    @IsEmail()
    email: string;
}
