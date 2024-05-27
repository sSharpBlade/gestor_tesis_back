import {
  IsString,
  IsInt,
  IsOptional,
  IsDate,
  IsNotEmpty,
} from 'class-validator';
import { Students } from 'src/entities/Students.entity';
export class CreateThesisDto {

  @IsOptional()
  @IsInt()
  idThesis: number;

  @IsOptional()
  @IsString()
  issue: string | null;

  @IsOptional()
  @IsString()
  state: string = "En curso";

  @IsNotEmpty()
  @IsDate()
  approvalDate:Date;

  @IsOptional()
  @IsDate()
  deletedAt: Date;

  @IsOptional()
  @IsInt()
  idStudent: Students;
}
