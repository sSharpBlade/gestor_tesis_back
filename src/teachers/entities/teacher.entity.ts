import { Student } from 'src/students/entities/student.entity';
import {
  Column,
  DeleteDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Teacher {
  @PrimaryGeneratedColumn()
  id_teacher: number;

  @Column({ length: 50, nullable: false })
  email: string;

  @Column({ length: 100, nullable: false })
  password: string;

  @OneToMany(() => Student, (student) => student.teacher)
  students: Student[];

  @DeleteDateColumn()
  deletedAt: Date;
}
