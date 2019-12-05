import { Injectable } from '@nestjs/common';
import { Holiday, HolidayCreate } from './models/holidays';
import { tsCallSignatureDeclaration } from '@babel/types';
import * as cuid from 'cuid';
import { DatabaseService } from 'src/database/database.service';
@Injectable()
export class HolidaysService {

    constructor(private db: DatabaseService) { }
    getAll() {
        return this.db.holidays;
    }

    add(holiday: HolidayCreate): Holiday {
        const result: Holiday = {
            id: cuid(),
            ...holiday,
        };
        this.db.holidays.push(result);
        return result;
    }
}
