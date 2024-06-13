import { Controller, Get, Post, Body, Patch, Param, Delete, Query, NotFoundException } from '@nestjs/common';
import { TeachersService, UserFindOne } from './teachers.service';
import { CreateTeacherDto } from './dto/create-teacher.dto';
import { UpdateTeacherDto } from './dto/update-teacher.dto';
import { Teacher } from './entities/teacher.entity';
import * as bcrypt from 'bcrypt';

@Controller('teachers')
export class TeachersController {
  constructor(private readonly teachersService: TeachersService) {}

  @Post()
  create(@Body() createTeacherDto: CreateTeacherDto) {
    return this.teachersService.create(createTeacherDto);
  }

  @Get()
  findAll() {
    return this.teachersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.teachersService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTeacherDto: UpdateTeacherDto) {
    return this.teachersService.update(+id, updateTeacherDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.teachersService.remove(+id);
  }

  @Post('by-email')
  async getTeacherByEmail(@Body() body: { email: string; password: string }): Promise<Teacher> {
    const { email, password } = body;
    const teacher = await this.teachersService.findByEmail(email);

    if (!teacher) {
      throw new NotFoundException('Teacher not found');
    }

    const isPasswordMatching = await bcrypt.compare(password, teacher.password);
    if (!isPasswordMatching) {
      throw new NotFoundException('Invalid credentials');
    }

    return teacher;
  }


}
