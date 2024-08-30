import { PassengerId } from "../value-objects/passenger-id.vo";

export class Passenger {
    constructor(
      private readonly id: PassengerId,
      private readonly name: string,
      private readonly birthDate: Date,
      private readonly cpf: string
    ) {}
  
    getId(): PassengerId {
      return this.id;
    }
  
    getName(): string {
      return this.name;
    }
  
    getBirthDate(): Date {
      return this.birthDate;
    }

    getCPF(): string {
      return this.cpf;
    }
  }