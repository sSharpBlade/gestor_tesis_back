
import { Reports } from "src/reports/entities/report.entity";
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";

//@Index("activities_pk", ["idActivity"], { unique: true })
//@Index("activities_id_activity_idx", ["idActivity"], {})
@Entity("activities", { schema: "public" })
export class Activities {
  @PrimaryGeneratedColumn({ type: "integer", name: "id_activity" })
  idActivity: number;

  @Column("date", { name: "date_activity" })
  dateActivity: string;

  @Column("timestamp without time zone", { name: "deletedat", nullable: true })
  deletedat: Date | null;

  @Column("text", { name: "description" })
  description: string;

  @ManyToOne(() => Reports, (reports) => reports.activities)
  @JoinColumn([{ name: "id_report", referencedColumnName: "idReport" }])
  idReport: Reports;
}
