import { v4 as uuidv4 } from 'uuid';

export class DriverId {
  private readonly value: string;

  constructor(value?: string) {
    this.value = value || uuidv4();
  }

  toString(): string {
    return this.value;
  }
}