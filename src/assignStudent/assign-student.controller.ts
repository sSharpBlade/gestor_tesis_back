import { Body, ConflictException, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateStudentDto } from './dto/create-student.dto';
import { StudentService } from './servicios/student.service';
import { CreateThesisDto } from './dto/create-thesis.dto';
import { ThesisService } from './servicios/thesis.service';
import { Teachers } from 'src/entities/Teachers.entity';

@Controller('assignStudent')
export class AssignStudentController {

    constructor(
        private readonly studentService:StudentService,
        private readonly thesisService:ThesisService,
    ) {}

    @Get(':teacherId')
    async get(@Param('teacherId') teacherId: string) {
      const id = parseInt(teacherId, 10);
      //return await this.studentService.findAllStudent(id);
      return await this.studentService.findAll(id);
    }

    @Post('register')
  async assignStudent( 
    @Body('student') createStudentDto: CreateStudentDto,
  @Body('thesis') createThesisDto: CreateThesisDto,
  ) {
    const student = await this.studentService.findOneCedula(createStudentDto.cedula);
    if (!student) {
      const newStudent = await this.studentService.create(createStudentDto);
      createThesisDto.idStudent = newStudent;
      const newThesis = await this.thesisService.createThesis(createThesisDto);
      return {
        message: 'Registro Exitoso',
        student: newStudent,
      };
    } else {
      throw new ConflictException('El estudiante ya existe');
    }
  }

}
