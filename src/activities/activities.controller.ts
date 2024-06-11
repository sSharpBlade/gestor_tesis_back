import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ActivitiesService } from './activities.service';
import { UpdateActivityDto } from './dto/update-activity.dto';
import { Activities } from './entities/activity.entity';
import { CreateActivityDto } from './dto/create-activity.dto';

@Controller('activities')
export class ActivitiesController {
  constructor(private readonly activitiesService: ActivitiesService) {}

  @Post()
  create(@Body() CreateActivityDto: CreateActivityDto) {
    return this.activitiesService.createActivities(CreateActivityDto);
  }

  @Get('rep/:id')
  findAll(@Param('id') id: string) {
    return this.activitiesService.findActivities(+id);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.activitiesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateActivityDto: UpdateActivityDto) {
    return this.activitiesService.update(+id, updateActivityDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.activitiesService.remove(+id);
  }
}
