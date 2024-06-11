import {
  IsString,
  IsInt,
  IsOptional,
  IsDateString,
  IsNotEmpty,
} from 'class-validator';

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

  @IsInt()
  percentage: number;

  @IsOptional()
  @IsDateString()
  modsigned: string;
}
