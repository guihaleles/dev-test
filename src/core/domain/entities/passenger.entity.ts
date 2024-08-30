
import { UserId } from '../value-objects/id.vo';
import { User } from './user.entity';

export class Passenger extends User {
  constructor(
      protected readonly id: UserId,
      protected readonly name: string,
      protected readonly birthDate: Date,
      protected readonly cpf: string,
      protected readonly gender: string,
      protected readonly address: string,
  ) {
      super(id, name, birthDate, cpf, gender, address);
  }

   
}