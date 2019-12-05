import { Injectable } from '@nestjs/common';
import { Holiday } from 'src/holidays/models/holidays';
import { Recipient } from 'src/holidays/models/recipients';

@Injectable()
export class DatabaseService {
    holidays: Holiday[] = [
        { id: 'h1', name: 'Kwanza', date: new Date(2019, 11, 23).toISOString() },
        { id: 'h2', name: 'St. Patricks', date: new Date(2020, 2, 14).toISOString() },

    ];

    recipients: Recipient[] = [
        { id: 'c1', name: 'Henry', email: 'henry@aol.com' },
        { id: 'c2', name: 'Violet', email: 'violet@aol.com' },
    ];

    recipientHolidays = {
        c1: ['h1'],
        c2: ['h1', 'h2'],
    };
}
