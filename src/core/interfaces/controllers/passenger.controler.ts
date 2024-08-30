

import { Controller } from '@nestjs/common';
import { Passenger } from '../../domain/entities/passenger.entity';
import { UserController } from './user.controller';
import { PassengerService } from 'src/core/application/services/passenger.service';

@Controller('passengers')
export class PassengerController extends UserController<Passenger> {
  constructor(private readonly passengerService: PassengerService) {
    super(passengerService);
  }
}