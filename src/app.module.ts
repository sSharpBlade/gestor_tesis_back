import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { StudentsModule } from './students/students.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TeachersModule } from './teachers/teachers.module';
import { CareersModule } from './careers/careers.module';
import { ThesisModule } from './thesis/thesis.module';
import { AssignStudentModule } from './assignStudent/student.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localHost',
      port: 5432,
      username: 'soporte',
      password: 'root',
      database: 'prueba',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      autoLoadEntities: true,
      synchronize: true,
    }),
    TeachersModule,
    CareersModule,
    StudentsModule,
    ThesisModule,
    AssignStudentModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
