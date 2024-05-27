import {
  IsString,
  MaxLength,
  IsNotEmpty,
  IsInt,
  IsOptional,
  IsDate,
} from 'class-validator';
import { Career } from 'src/careers/entities/career.entity';
import { Teacher } from 'src/teachers/entities/teacher.entity';
import { Thesis } from 'src/thesis/entities/Thesis.entity';

export class CreateStudentDto {

  @IsOptional()
  @IsInt()
  idStudent: number;

  @IsNotEmpty()
  @IsString()
  @MaxLength(10)
  cedula: string;
  
  @IsNotEmpty()
  @IsString()
  @MaxLength(30)
  firstname: string;
  
  @IsNotEmpty()
  @IsString()
  @MaxLength(30)
  lastname: string;

  @IsOptional()
  @IsDate()
  deletedAt: Date;

  
  @IsNotEmpty()
  idCareer: Career;
  
  @IsNotEmpty()
  idTeacher: Teacher;
  
  theses: Thesis[];

  

}
