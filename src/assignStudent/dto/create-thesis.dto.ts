import {
  IsString,
  IsInt,
  IsOptional,
  IsDate,
  IsNotEmpty,
} from 'class-validator';
import { Student } from 'src/students/entities/student.entity';
export class CreateThesisDto {

  @IsOptional()
  @IsInt()
  idThesis: number;

  @IsNotEmpty()
  @IsString()
  issue: string;

  @IsOptional()
  @IsString()
  state: string = "En curso";

  @IsNotEmpty()
  @IsString()
  approvalDate:Date;

  @IsOptional()
  @IsDate()
  deletedAt: Date;

  @IsOptional()
  @IsInt()
  student: Student;
}
