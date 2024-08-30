

import { Controller } from '@nestjs/common';
import { UserController } from './user.controller';
import { DriverService } from 'src/core/application/services/driver.service';
import { Driver } from 'src/core/domain/entities/driver.entity';

@Controller('drivers')
export class DriverController extends UserController<Driver> {
  constructor(private readonly draverService: DriverService) {
    super(draverService);
  }
}