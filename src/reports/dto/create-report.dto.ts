import {
  IsString,
  IsInt,
  IsOptional,
  IsDateString,
  IsNotEmpty,
} from 'class-validator';
import { Column } from 'typeorm';

export class CreateReportDto {
  @IsOptional()
  @IsInt()
  idReport: number;

  @IsOptional()
  @IsInt()
  @IsNotEmpty()
  idThesis: number;

  @IsNotEmpty()
  @IsString()
  title: string;

  @IsDateString()
  date: string;

  @IsOptional()
  @IsDateString()
  deletedAt: string;

  @IsOptional()
  @IsDateString()
  signedAt: string;

  @IsOptional()
  @IsInt()
  @Column({ type: 'int', default: 0 })
  percentage: number;

  @IsOptional()
  @IsDateString()
  modsigned: string;
}
