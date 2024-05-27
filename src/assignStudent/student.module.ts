import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Students } from 'src/entities/Students.entity';
import { StudentService } from './servicios/student.service';
import { Thesis } from 'src/entities/Thesis.entity';
import { ThesisService } from './servicios/thesis.service';
import { AssignStudentController } from './assign-student.controller';
import { Teachers } from 'src/entities/Teachers.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Students,Thesis,Teachers])],
  controllers:[AssignStudentController],
  providers: [StudentService,ThesisService],
})
export class StudentModule {}
