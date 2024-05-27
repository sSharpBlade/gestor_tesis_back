import {
  Column,
  DeleteDateColumn,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Careers } from "./Careers.entity";
import { Teachers } from "./Teachers.entity";
import { Thesis } from "./Thesis.entity";

//@Index("students_pkey", ["idStudent"], { unique: true })
@Entity("students", { schema: "public" })
export class Students {
  @PrimaryGeneratedColumn({ type: "integer", name: "id_student" })
  idStudent: number;

  @Column("character", { name: "cedula", nullable: true, length: 10 })
  cedula: string | null;

  @Column("character varying", {
    name: "firstname",
    nullable: true,
    length: 30,
  })
  firstname: string | null;

  @Column("character varying", { name: "lastname", nullable: true, length: 30 })
  lastname: string | null;

  @DeleteDateColumn()
  deletedAt: Date;

  @ManyToOne(() => Careers, (careers) => careers.students)
  @JoinColumn([{ name: "id_career", referencedColumnName: "idCareer" }])
  idCareer: Careers;

  @ManyToOne(() => Teachers, (teachers) => teachers.students)
  @JoinColumn([{ name: "id_teacher", referencedColumnName: "idTeacher" }])
  idTeacher: Teachers;

  @OneToMany(() => Thesis, (thesis) => thesis.idStudent)
  theses: Thesis[];
}
