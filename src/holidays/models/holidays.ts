import { IsDateString, IsNotEmpty } from 'class-validator';

export interface Holiday {
    id: string;
    name: string;
    date: string;
}

export class HolidayCreate {

    @IsNotEmpty()
    name: string;
    @IsDateString()
    date: string;
}
