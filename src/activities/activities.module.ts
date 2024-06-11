import { Module } from '@nestjs/common';
import { ActivitiesService } from './activities.service';
import { ActivitiesController } from './activities.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Activities } from './entities/activity.entity';
import { ReportsModule } from 'src/reports/reports.module';

@Module({
  imports:[TypeOrmModule.forFeature([Activities]),ReportsModule],
  controllers: [ActivitiesController],
  providers: [ActivitiesService],
})
export class ActivitiesModule {}
