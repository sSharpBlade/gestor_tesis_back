import { Student } from "src/students/entities/student.entity";
import {
  Column,
  DeleteDateColumn,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";

//@Index("careers_pkey", ["idCareer"], { unique: true })
@Entity("careers", { schema: "public" })
export class Career {
  @PrimaryGeneratedColumn({ type: "integer", name: "id_career" })
  idCareer: number;

  @Column("character varying", { name: "name", nullable: true, length: 50 })
  name: string | null;

  @DeleteDateColumn()
  deletedAt: Date;

  @OneToMany(() => Student, (students) => students.career)
  students: Student[];
}
