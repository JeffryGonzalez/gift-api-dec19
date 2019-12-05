import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { RecipientCreate, Recipient } from 'src/holidays/models/recipients';
import cuid = require('cuid');

@Injectable()
export class RecipientsService {

    constructor(private db: DatabaseService) { }

    getAll() {
        const r = this.db.recipients;
        const result = r.map(rec => {
            return {
                ...rec,
                holidays: this.db.recipientHolidays[rec.id],
            };
        });
        return result;
    }

    add(recipient: RecipientCreate) {
        const result: Recipient = {
            ...recipient,
            id: cuid(),
        };
        this.db.recipients.push(result);
        return result;
    }

    addHolidays(recipientId: string, holidays: string[]) {
        if (this.db.recipients.find(r => r.id === recipientId)) {
            this.db.recipientHolidays[recipientId] = holidays;
            return true;
        } else {
            return false;
        }
    }
}
