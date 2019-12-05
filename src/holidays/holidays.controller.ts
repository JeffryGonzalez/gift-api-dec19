import { Controller, Get, Post, Body, BadRequestException } from '@nestjs/common';
import { HolidaysService } from './holidays.service';
import { HolidayCreate } from './models/holidays';

@Controller('holidays')
export class HolidaysController {
    constructor(private service: HolidaysService) {

    }

    @Get()
    getAllHolidays() {
        return {
            holidays: this.service.getAll(),
        };
    }

    @Post()
    async addHoliday(@Body() holiday: HolidayCreate) {

        return await new Promise((res, rej) => {
            setTimeout(() => {
                if (holiday.name.toLowerCase() === 'sweetest day') {
                    rej(new BadRequestException('Made up Holiday!'));
                }
                res(this.service.add(holiday));
            }, 4000);
        });
    }
}
