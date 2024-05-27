import { Module } from '@nestjs/common';
import { CareersService } from './careers.service';
import { CareersController } from './careers.controller';
import { Career } from './entities/career.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Career])],
  controllers: [CareersController],
  providers: [CareersService],
})
export class CareersModule {}
