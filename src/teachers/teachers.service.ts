import { Injectable } from '@nestjs/common';
import { CreateTeacherDto } from './dto/create-teacher.dto';
import { UpdateTeacherDto } from './dto/update-teacher.dto';
import { Teacher } from './entities/teacher.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

export interface UserFindOne{
  id?: number;
  email?: string;
}

@Injectable()
export class TeachersService {

  constructor(
    @InjectRepository(Teacher)
    private readonly teachersRepository: Repository<Teacher>
){}
  create(createTeacherDto: CreateTeacherDto) {
    return 'This action adds a new teacher';
  }

  async findAll(): Promise<Teacher[]> {
    return await this.teachersRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} teacher`;
  }

  update(id: number, updateTeacherDto: UpdateTeacherDto) {
    return `This action updates a #${id} teacher`;
  }

  remove(id: number) {
    return `This action removes a #${id} teacher`;
  }

  async findByEmail(email: string): Promise<Teacher | undefined> {
    return this.teachersRepository.findOne({ where: { email } });
  }
}
