import {
  Column,
  DeleteDateColumn,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Students } from "./Students.entity";

//@Index("teachers_pkey", ["idTeacher"], { unique: true })
@Entity("teachers", { schema: "public" })
export class Teachers {
  @PrimaryGeneratedColumn({ type: "integer", name: "id_teacher" })
  idTeacher: number;

  @Column("character varying", { name: "email", length: 50 })
  email: string;

  @Column("character varying", { name: "password", length: 100 })
  password: string;

  @DeleteDateColumn()
  deletedAt: Date;

  @OneToMany(() => Students, (students) => students.idTeacher)
  students: Students[];
}
