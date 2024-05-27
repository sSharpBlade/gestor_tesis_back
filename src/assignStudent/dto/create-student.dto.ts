import {
  IsString,
  MaxLength,
  IsNotEmpty,
  IsInt,
  IsOptional,
  IsDate,
} from 'class-validator';
import { Careers } from 'src/entities/Careers.entity';
import { Teachers } from 'src/entities/Teachers.entity';
import { Thesis } from 'src/entities/Thesis.entity';

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
  idCareer: Careers;
  
  @IsNotEmpty()
  idTeacher: Teachers;
  
  theses: Thesis[];

  

}
