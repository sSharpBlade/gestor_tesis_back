import { IsEmail, IsNotEmpty, IsString, Length } from 'class-validator';

export class CreateTeacherDto {
  @IsEmail()
  @IsNotEmpty()
  @Length(1, 50)
  email: string;

  @IsString()
  @IsNotEmpty()
  @Length(1, 100)
  password: string;
}
