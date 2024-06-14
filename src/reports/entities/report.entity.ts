import { Activities } from 'src/activities/entities/activity.entity';
import { Thesis } from 'src/thesis/entities/thesis.entity';
import {
  Column,
  DeleteDateColumn,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

//@Index("reports_pk", ["idReport"], { unique: true })
@Entity('reports', { schema: 'public' })
export class Reports {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id_report' })
  idReport: number;

  @Column('character varying', { name: 'title', length: 50 })
  title: string;

  @DeleteDateColumn()
  deletedAt: Date | null;

  @Column('date', { name: 'date' })
  date: string;

  @Column('integer', { name: 'percentage' })
  percentage: number;

  @OneToMany(() => Activities, (activities) => activities.idReport)
  activities: Activities[];

  @ManyToOne(() => Thesis, (thesis) => thesis.reports)
  @JoinColumn([{ name: 'id_thesis', referencedColumnName: 'idThesis' }])
  idThesis: Thesis;
}
