import { Module } from '@nestjs/common';
import { DriverController } from './core/interfaces/controllers/driver.controler';
import { PassengerController } from './core/interfaces/controllers/passenger.controler';
import { DriverService } from './core/application/services/driver.service';
import { PassengerService } from './core/application/services/passenger.service';
import { PassengerTypeOrmRepository } from './core/infra/repositories/passenger-typeorm.repository';
import { IPassengerRepository } from 'src/core/domain/repositories/passenger.repository.interface';
import { DriverTypeOrmRepository } from './core/infra/repositories/driver-typeorm.repository';


@Module({
  imports: [],
  controllers: [DriverController, PassengerController],
  providers: [
    {
      provide: 'IPassengerRepository',
      useClass: PassengerTypeOrmRepository,
    },
    {
      provide: 'IDriverRepository',
      useClass: DriverTypeOrmRepository,
    },
    DriverService, 
    PassengerService,
  
  ],
  exports: ['IPassengerRepository', 'IDriverRepository'],
})
export class AppModule {}
