import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Activities } from './entities/activity.entity';
import { Repository } from 'typeorm';
import { UpdateActivityDto } from './dto/update-activity.dto';
import { ReportsService } from 'src/reports/reports.service';
import { CreateActivityDto } from './dto/create-activity.dto';

@Injectable()
export class ActivitiesService {
  constructor(
    @InjectRepository(Activities)
    private readonly activityRepository: Repository<Activities>,
    private reportsService: ReportsService,
  ) {}

  async createActivities(createActivitiesDto: CreateActivityDto) {
    const activity = this.activityRepository.create(createActivitiesDto);
    return this.activityRepository.save(activity);
  }

  async findActivities(id: number): Promise<Activities[]> {
    return await this.activityRepository
      .createQueryBuilder('activity')
      .leftJoinAndSelect('activity.idReport', 'report')
      .where('report.idReport = :id', { id })
      .andWhere('activity.deletedat IS NULL')
      .getMany();
  }

  async findActivitiesByThesis(id: number): Promise<Activities[]> {
    return await this.activityRepository
      .createQueryBuilder('activity')
      .leftJoinAndSelect('activity.idReport', 'report')
      .leftJoinAndSelect('report.idThesis', 'thesis')
      .where('thesis.idThesis = :id', { id })
      .andWhere('activity.deletedat IS NULL')
      .orderBy('activity.idActivity', 'ASC')
      .getMany();
  }

  async findOne(id: number): Promise<Activities> {
    const activity = await this.activityRepository.findOne({
      where: {
        idActivity: id,
        deletedat: null,
      },
    });
    if (!activity) {
      throw new NotFoundException('The activity does not exist');
    }
    return activity;
  }

  async update(id: number, updateActivityDto: UpdateActivityDto) {
    return await this.activityRepository.update(id, updateActivityDto);
  }

  async remove(id: number): Promise<string> {
    const activity = await this.findOne(id);
    activity.deletedat = new Date();
    await this.activityRepository.save(activity);
    return 'Delete Correcto';
  }
}
