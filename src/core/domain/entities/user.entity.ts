import { CpfUtils } from "../utils/cpf-validator";
import { UserId } from "../value-objects/id.vo";

export abstract class User {
    constructor(
        protected readonly id: UserId,
        protected readonly name: string,
        protected readonly birthDate: Date,
        protected readonly cpf: string,
        protected readonly gender: string,
        protected readonly address: string,
    ) {
        if (!CpfUtils.validate(cpf)) {
            throw new Error('Invalid CPF');
        }

        if (!this.validateBirthDate()) {
            throw new Error('Invalid birth date');
        }
    }
  
    getId(): string {
      return this.id.toString();
    }
  
    getName(): string {
      return this.name;
    }
  
    getBirthDate(): Date {
      return this.birthDate;
    }
  
    getCpf(): string {
      return this.cpf;
    }

    getGender(): string {
      return this.gender;
    }

    getAddress(): string {
      return this.address;
    }

    validateBirthDate(): boolean {
        const currentDate = new Date();
        const birthDate = this.birthDate;
        const age = currentDate.getFullYear() - birthDate.getFullYear();
        const month = currentDate.getMonth() - birthDate.getMonth();
        if (month < 0 || (month === 0 && currentDate.getDate() < birthDate.getDate())) {
            return age - 1 >= 0 && age - 1 <= 130;
        }
        return age >= 0 && age <= 130;
    }
  }