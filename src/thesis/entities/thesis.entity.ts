import { Student } from 'src/students/entities/student.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Thesis {
  @PrimaryGeneratedColumn()
  id_thesis: number;

  @Column({ nullable: false })
  issue: string;

  @Column({ default: 0 })
  finalstate: number;

  @Column({ nullable: true })
  state: string;

  @ManyToOne(() => Student, (student) => student.theses, { eager: true })
  student: Student;
}
