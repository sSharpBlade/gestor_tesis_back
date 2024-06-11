import {
  IsArray,
  IsDateString,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';
import { Reports } from 'src/reports/entities/report.entity';

export class CreateActivityDto {
  @IsOptional()
  @IsNumber()
  idActivity?: number;

  @IsNotEmpty()
  @IsDateString()
  dateActivity: string;

  @IsNotEmpty()
  @IsString()
  description: string;

  @IsOptional()
  @IsDateString()
  deletedat?: string | null;

  @IsNotEmpty()
  @IsNumber()
  idReport: Reports;
}

