import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Thesis } from './entities/Thesis.entity';

@Injectable()
export class ThesisService {
  constructor(
    @InjectRepository(Thesis)
    private readonly thesisRepository: Repository<Thesis>,
  ) {}


  async findAll() {
        
    return await this.thesisRepository.find();
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

}
