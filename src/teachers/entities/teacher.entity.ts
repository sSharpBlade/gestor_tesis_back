import { Student } from "src/students/entities/student.entity";
import {
  Column,
  DeleteDateColumn,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";

//@Index("teachers_pkey", ["idTeacher"], { unique: true })
@Entity("teachers", { schema: "public" })
export class Teacher {
  @PrimaryGeneratedColumn({ type: "integer", name: "id_teacher" })
  idTeacher: number;

  @Column("character varying", { name: "email", length: 50 })
  email: string;

  @Column("character varying", { name: "password", length: 100 })
  password: string;

  @DeleteDateColumn()
  deletedAt: Date;

  @OneToMany(() => Student, (students) => students.teacher)
  students: Student[];
}
