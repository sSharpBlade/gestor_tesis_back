import { Career } from 'src/careers/entities/career.entity';
import { Teacher } from 'src/teachers/entities/teacher.entity';
import { Thesis } from 'src/thesis/entities/thesis.entity';
import {
  Column,
  DeleteDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Student {
  @PrimaryGeneratedColumn()
  id_student: number;

  @Column({ unique: true })
  cedula: string;

  @Column({ nullable: false })
  firstname: string;

  @Column({ nullable: false })
  lastname: string;

  @ManyToOne(() => Career, (career) => career.students, { eager: true })
  career: Career;

  @ManyToOne(() => Teacher, (teacher) => teacher.students, { eager: true })
  teacher: Teacher;

  @OneToMany(() => Thesis, (thesis) => thesis.student)
  theses: Thesis[];

  @DeleteDateColumn()
  deletedAt: Date;
}
