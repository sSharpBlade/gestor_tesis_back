import { Injectable } from '@nestjs/common';
import { CreateThesisDto } from './dto/create-thesis.dto';
import { UpdateThesisDto } from './dto/update-thesis.dto';
import { Thesis } from './entities/thesis.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ThesisService {
  constructor(
    @InjectRepository(Thesis)
    private readonly thesisRepository: Repository<Thesis>,
  ) {}
  create(createThesisDto: CreateThesisDto) {
    return 'This action adds a new thesis';
  }

  async findAll() {
    return await this.thesisRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} thesis`;
  }

  async findThesesByTeacherId(teacherId: number): Promise<Thesis[]> {
    return this.thesisRepository
      .createQueryBuilder('thesis')
      .leftJoinAndSelect('thesis.student', 'student')
      .leftJoinAndSelect('student.teacher', 'teacher')
      .leftJoinAndSelect('student.career', 'career')
      .where('teacher.id_teacher = :teacherId', { teacherId })
      .getMany();
  }

  update(id: number, updateThesisDto: UpdateThesisDto) {
    return `This action updates a #${id} thesis`;
  }

  remove(id: number) {
    return `This action removes a #${id} thesis`;
  }
}
