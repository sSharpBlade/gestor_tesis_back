import { IsString, MinLength, IsNumber } from 'class-validator';

export class CreateStudentDto {
  @IsString()
  name: string;

  @IsString()
  career: string;

  @IsString()
  @MinLength(10)
  id: string;

  @IsString()
  state: string;

  @IsNumber()
  percentage: number;
}
