import { Passenger } from '../entities/passenger.entity';

export interface PassengerRepository {
  save(passenger: Passenger): Promise<void>;
  findById(id: string): Promise<Passenger | null>;
  findAll(): Promise<Passenger[]>;
  delete(id: string): Promise<void>;
  update(passenger: Passenger): Promise<void>;
}