import {
  Column,
  DeleteDateColumn,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Students } from "./Students.entity";

//@Index("careers_pkey", ["idCareer"], { unique: true })
@Entity("careers", { schema: "public" })
export class Careers {
  @PrimaryGeneratedColumn({ type: "integer", name: "id_career" })
  idCareer: number;

  @Column("character varying", { name: "name", nullable: true, length: 50 })
  name: string | null;

  @DeleteDateColumn()
  deletedAt: Date;

  @OneToMany(() => Students, (students) => students.idCareer)
  students: Students[];
}
