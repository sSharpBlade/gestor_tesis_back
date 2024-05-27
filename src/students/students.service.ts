import { Injectable } from '@nestjs/common';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Student } from './entities/student.entity';
import { Repository } from 'typeorm';

@Injectable()
export class StudentsService {
  constructor(
    @InjectRepository(Student)
    private readonly studentRepository: Repository<Student>,
  ) {}

  // async create(createStudentDto: CreateStudentDto) {
  //   return await this.studentRepository.save(createStudentDto);
  // }

  async findAll() {
    return await this.studentRepository.find();
  }

  async remove(id: string) {
    return await this.studentRepository.softDelete(id);
  }

  // async update(id: string, updateStudentDto: UpdateStudentDto) {
  //   return await this.studentRepository.update(id, updateStudentDto);
  // }

  async findOneByCedula(cedula: string) {
    return await this.studentRepository.findOneBy({ cedula: cedula });
  }
}
