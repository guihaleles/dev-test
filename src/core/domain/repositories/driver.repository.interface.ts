import { Driver } from '../entities/driver.entity';

export interface DriverRepository {
    save(driver: Driver): Promise<void>;
    findById(id: string): Promise<Driver | null>;
    findAll(): Promise<Driver[]>;
    delete(id: string): Promise<void>;
    update(driver: Driver): Promise<void>;
}