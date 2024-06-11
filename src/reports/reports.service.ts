import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateReportDto } from './dto/create-report.dto';
import { UpdateReportDto } from './dto/update-report.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Reports } from './entities/report.entity';
import { Thesis } from 'src/thesis/entities/Thesis.entity';

@Injectable()
export class ReportsService {
  constructor(
    @InjectRepository(Reports)
    private readonly reportsRepository: Repository<Reports>,
  ) {}

  async create(createReportDto: CreateReportDto): Promise<Reports> {
    const { idThesis, ...reportData } = createReportDto;

    const newReport = this.reportsRepository.create({
      ...reportData,
      idThesis: { idThesis }, 
    });

    return await this.reportsRepository.save(newReport);
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

  async update(idReport: number, updateReportDto: UpdateReportDto): Promise<Reports> {
    const report = await this.reportsRepository.findOne({ where: { idReport } });
    if (!report) {
      throw new NotFoundException(`Report with ID ${idReport} not found`);
    }

    const updatedReport = Object.assign(report, updateReportDto);
    return this.reportsRepository.save(updatedReport);
  }

  async remove(id: number) {
    return await this.reportsRepository.softDelete(id);
  }

  async findOne(idReport: number): Promise<Reports> {
    const report = await this.reportsRepository.findOneBy({ idReport });
    if (!report) {
      throw new NotFoundException(`Report with ID ${idReport} not found`);
    }
    return report;
  }
}
