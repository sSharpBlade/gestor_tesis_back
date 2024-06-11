import { IsString, IsInt, IsOptional, IsDate } from 'class-validator';
import { Student } from 'src/students/entities/student.entity';

export class CreateThesisDto {
  @IsOptional()
  @IsInt()
  finalstate: number;

  @IsString()
  issue: string;

  @IsOptional()
  @IsString()
  state: string;
  
  @IsOptional()
  @IsString()
  approvalDate: string | null;

  @IsOptional()
  @IsDate()
  deletedAt: Date | null;

  @IsOptional()
  @IsInt()
  student: Student;
}