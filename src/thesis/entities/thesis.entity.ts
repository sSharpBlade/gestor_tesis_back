import { Reports } from 'src/reports/entities/report.entity';
import { Student } from 'src/students/entities/student.entity';
import {
  Column,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('thesis', { schema: 'public' })
export class Thesis {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id_thesis' })
  idThesis: number;

  @Column('varchar', { name: 'issue', length: 50, nullable: false })
  issue: string;

  @Column('varchar', { name: 'state', length: 50, default: 'En curso' })
  state: string;

  @Column({ type: 'integer', name: 'finalstate', default: 0 })
  finalstate: number;

  @Column({ type: 'date', name: 'approval_date', nullable: true }) // Nueva columna para la fecha de aprobación
  approvalDate: Date | null;

  @DeleteDateColumn()
  deletedAt: Date;

  @ManyToOne(() => Student, (students) => students.theses)
  @JoinColumn([{ name: 'id_student', referencedColumnName: 'idStudent' }])
  student: Student;

  @OneToMany(() => Reports, (reports) => reports.idThesis)
  reports: Reports[];
}