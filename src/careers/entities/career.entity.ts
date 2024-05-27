import { Student } from 'src/students/entities/student.entity';
import {
  Column,
  DeleteDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Career {
  @PrimaryGeneratedColumn()
  id_career: number;

  @Column({ nullable: false })
  name: string;

  @OneToMany(() => Student, (student) => student.career)
  students: Student[];

  @DeleteDateColumn()
  deletedAt: Date;
}
