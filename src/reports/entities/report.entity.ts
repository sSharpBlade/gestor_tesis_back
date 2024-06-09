import {
  Column,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Thesis } from '../../thesis/entities/Thesis.entity';

@Entity('reports', { schema: 'public' })
export class Reports {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id_report' })
  idReport: number;

  @Column('character varying', { name: 'title', length: 50 })
  title: string;

  @Column('timestamp without time zone', { name: 'deletedAt', nullable: true })
  @DeleteDateColumn()
  deletedAt: Date | null;

  @Column('date', { name: 'date' })
  date: string;

  @Column('integer', { name: 'percentage' })
  percentage: number;

  @Column('date', { name: 'signedAt', nullable: true })
  signedAt: string | null;

  @Column('date', { name: 'modsigned', nullable: true })
  modsigned: string | null;

  @ManyToOne(() => Thesis, (thesis) => thesis.reports)
  @JoinColumn([{ name: 'id_thesis', referencedColumnName: 'idThesis' }])
  idThesis: Thesis;
}
function SoftDeleteEntity(
  arg0: string,
): (target: typeof Reports) => void | typeof Reports {
  throw new Error('Function not implemented.');
}
