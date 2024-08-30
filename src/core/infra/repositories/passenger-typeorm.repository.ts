import { Injectable } from '@nestjs/common';
import { IPassengerRepository } from 'src/core/domain/repositories/passenger.repository.interface';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PassengerOrmEntity } from '../orm/passenger.orm-entity';
import { Passenger } from 'src/core/domain/entities/passenger.entity';


@Injectable()
export class PassengerTypeOrmRepository implements IPassengerRepository {
    constructor(
        @InjectRepository(PassengerOrmEntity)
        private readonly passengerRepository: Repository<PassengerOrmEntity>,
      ) { }
    
      async findAll(): Promise<Passenger[]> {
        return this.passengerRepository.find();
      }
    
      async findById(id: string): Promise<Passenger> {
        return this.passengerRepository.findOne(id);
      }
    
      async save(passenger: Passenger) {
        await this.passengerRepository.save(passenger);
      }
    
      async update(passenger: Passenger) {
        await this.passengerRepository.update(passenger.getId(), passenger);
      }
    
      async delete(id: string): Promise<void> {
        await this.passengerRepository.delete(id);
      }
}