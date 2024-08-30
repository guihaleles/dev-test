import { cpf as cpfLib } from 'cpf-cnpj-validator';

export class CpfUtils {
  static validate(cpf: string): boolean {
    return cpfLib.isValid(cpf);
  }
}