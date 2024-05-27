import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Students } from 'src/entities/Students.entity';
import { CreateStudentDto } from '../dto/create-student.dto';
import { UpdateStudentDto } from '../dto/update-student.dto';
import { Teachers } from 'src/entities/Teachers.entity';

@Injectable()
export class StudentService {

  constructor(
    @InjectRepository(Students)
    private readonly studentRepository:Repository<Students>
  ){}

  async create(createStudentDto: CreateStudentDto) {
    const newStudent = this.studentRepository.create(createStudentDto)
    return await this.studentRepository.save(newStudent);
  }

  async findAllStudent(id: number):Promise<Students> {
    return await this.studentRepository
      .query(`SELECT * FROM students WHERE id_teacher = $1`, [id]);
  }

  async findAll(id: number) {
    return await this.studentRepository
      .createQueryBuilder("student") // Selecciona el id del estudiante
      .addSelect("student.idTeacher.idTeacher", "idTeacher") // Selecciona el id del profesor
      .leftJoin("student.idTeacher", "teacher")
      .where("teacher.idTeacher = :teacherId", { teacherId: id })
      .getRawMany();
  }
  async update(updateStudentDto:UpdateStudentDto){
    try {
      const { idStudent, ...updateData } = updateStudentDto;
      await this.studentRepository.update(idStudent, updateData);
      return 'Estudiante actualizado correctamente';
    } catch (error) {
      throw new Error(`Error al actualizar estudiante: ${error.message}`);
    }
    }

  async findOneCedula(cedula: string) {
    return await this.studentRepository.findOne({
      where: { cedula: cedula },
    });
  }

}
