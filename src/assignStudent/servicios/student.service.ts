import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateStudentDto } from '../dto/create-student.dto';
import { UpdateStudentDto } from '../dto/update-student.dto';
import { Student } from 'src/students/entities/student.entity';

@Injectable()
export class StudentService {

  constructor(
    @InjectRepository(Student)
    private readonly studentRepository:Repository<Student>
  ){}

  async create(createStudentDto: CreateStudentDto) {
    const newStudent = this.studentRepository.create(createStudentDto)
    return await this.studentRepository.save(newStudent);
  }

  async findAllStudent(id: number):Promise<Student> {
    return await this.studentRepository
      .query(`SELECT * FROM students WHERE id_teacher = $1`, [id]);
  }

  async findAll(teacherId: number){
    return await this.studentRepository
      .createQueryBuilder("student") // Alias para la tabla de estudiantes
      .addSelect("teacher.idTeacher", "idTeacher") // Selecciona el id del profesor
      .leftJoin("student.teacher", "teacher") // Asumiendo que la relación es 'teacher' en Student
      .where("teacher.idTeacher = :teacherId", { teacherId }) // Usa el alias 'teacher' aquí
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
