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
import { Teacher } from "../../teachers/entities/teacher.entity";
import { Career } from "src/careers/entities/career.entity";
import { Thesis } from "src/thesis/entities/thesis.entity";

//@Index("students_pkey", ["idStudent"], { unique: true })
@Entity("students", { schema: "public" })
export class Student {
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

  @ManyToOne(() => Career, (careers) => careers.students)
  @JoinColumn([{ name: "id_career", referencedColumnName: "idCareer" }])
  career: Career;

  @ManyToOne(() => Teacher, (teachers) => teachers.students)
  @JoinColumn([{ name: "id_teacher", referencedColumnName: "idTeacher" }])
  teacher: Teacher;

  @OneToMany(() => Thesis, (thesis) => thesis.student)
  theses: Thesis[];
}
