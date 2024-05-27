import { Column, DeleteDateColumn, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Students } from "./Students.entity";

@Entity("thesis", { schema: "public" })
export class Thesis {
  @PrimaryGeneratedColumn({ type: "integer", name: "id_thesis" })
  idThesis: number;

  @Column("character varying", { name: "issue", length: 50 })
  issue: string | null;

  @Column('varchar', { name: 'state', length: 50, default: 'En curso' })
  state: string;

  @Column({ type: 'date', name: 'approval_date', nullable: true }) // Nueva columna para la fecha de aprobación
  approvalDate: Date | null;

  @DeleteDateColumn()
  deletedAt: Date;

  @ManyToOne(() => Students, (students) => students.theses)
  @JoinColumn([{ name: "id_student", referencedColumnName: "idStudent" }])
  idStudent: Students;
}