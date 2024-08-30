import { Driver } from '../entities/driver.entity';
import { IUserRepository } from './user.repository.interface';

export interface IDriverRepository extends IUserRepository<Driver> {}