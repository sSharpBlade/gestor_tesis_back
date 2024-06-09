import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ThesisService } from './thesis.service';

import { Thesis } from './entities/thesis.entity';

@Controller('thesis')
export class ThesisController {
  constructor(private readonly thesisService: ThesisService) {}



  @Get()
  findAll() {
    return this.thesisService.findAll();
  }

  @Get('teacher/:id')
  async getThesesByTeacherId(@Param('id') id: number): Promise<Thesis[]> {
    return this.thesisService.findThesesByTeacherId(id);
  }


}
