import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudentService } from './servicios/student.service';
import { ThesisService } from './servicios/thesis.service';
import { AssignStudentController } from './assign-student.controller';
import { Student } from 'src/students/entities/student.entity';
import { Thesis } from 'src/thesis/entities/Thesis.entity';
import { Teacher } from 'src/teachers/entities/teacher.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Student,Thesis,Teacher])],
  controllers:[AssignStudentController],
  providers: [StudentService,ThesisService],
})
export class AssignStudentModule {}
