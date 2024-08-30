import { Injectable } from '@nestjs/common';
import { IDriverRepository } from '../../domain/repositories/driver.repository.interface';
import { Driver } from '../../domain/entities/driver.entity';


@Injectable()
export class DriverTypeOrmRepository implements IDriverRepository {
  save(user: Driver): Promise<void> {
    throw new Error('Method not implemented.');
  }
  findById(id: string): Promise<Driver> {
    throw new Error('Method not implemented.');
  }
  findAll(): Promise<Driver[]> {
    throw new Error('Method not implemented.');
  }
  delete(id: string): Promise<void> {
    throw new Error('Method not implemented.');
  }
  update(user: Driver): Promise<void> {
    throw new Error('Method not implemented.');
  }

}