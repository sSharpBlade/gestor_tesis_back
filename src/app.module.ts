import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StudentModule } from './assignStudent/student.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AssignStudentController } from './assignStudent/assign-student.controller';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'soporte',
    password: 'root',
    database: 'prueba',
    entities: [__dirname + '/**/*.entity{.ts,.js}'],
    autoLoadEntities: true,
    synchronize: true,
  }),StudentModule],
  controllers: [AppController,],
  providers: [AppService],
})
export class AppModule {}
