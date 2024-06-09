import { Injectable } from '@nestjs/common';
import { CreateReportDto } from './dto/create-report.dto';
import { UpdateReportDto } from './dto/update-report.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Reports } from './entities/report.entity';

@Injectable()
export class ReportsService {
  constructor(
    @InjectRepository(Reports)
    private readonly reportsRepository: Repository<Reports>,
  ) {}

  create(createReportDto: CreateReportDto) {
    return 'This action adds a new report';
  }

  findAll() {
    return this.reportsRepository.find();
  }

  async findReportsByIdStudent(cedula: string): Promise<Reports[]> {
    return this.reportsRepository
      .createQueryBuilder('reports')
      .leftJoinAndSelect('reports.idThesis', 'thesis')
      .leftJoinAndSelect('thesis.student', 'student')
      .where('student.cedula = :cedula', { cedula })
      .getMany();
  }

  update(id: number, updateReportDto: UpdateReportDto) {
    return `This action updates a #${id} report`;
  }

  async remove(id: number) {
    return await this.reportsRepository.softDelete(id);
  }
}
