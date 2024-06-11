import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { StudentsModule } from './students/students.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TeachersModule } from './teachers/teachers.module';
import { CareersModule } from './careers/careers.module';
import { ThesisModule } from './thesis/thesis.module';
import { AssignStudentModule } from './assignStudent/student.module';
import { ReportsModule } from './reports/reports.module';
import { ActivitiesModule } from './activities/activities.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'dpg-cp9pbilds78s73cm157g-a.oregon-postgres.render.com',
      port: 5432,
      username: 'gestor_72h4_user',
      password: 'jI3F8I8m94wAKeS74A7MZN2aIr52gs6U',
      database: 'gestor_72h4',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      autoLoadEntities: true,
      synchronize: false,
      ssl: {
        rejectUnauthorized: false, // Utilizar true si tienes un certificado válido
      },
    }),
    TeachersModule,
    CareersModule,
    StudentsModule,
    ThesisModule,
    AssignStudentModule,
    ReportsModule,
    ActivitiesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
