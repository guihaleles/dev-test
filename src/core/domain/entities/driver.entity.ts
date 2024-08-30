import { DriverId } from '../value-objects/driver-id.vo';

export class Driver {
  constructor(
    private readonly id: DriverId,
    private readonly name: string,
    private readonly birthDate: Date,
    private readonly cpf: string,
  ) {}

    getId(): DriverId {
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