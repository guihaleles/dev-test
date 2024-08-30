import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsDate, IsNotEmpty, IsDateString } from 'class-validator';
import { ICreateUser } from '../../application/commands/create-user.interface';
import { Transform } from 'class-transformer';

export abstract class CreateUpdateUserDto implements ICreateUser {
  @ApiProperty({ description: 'Name of the user' })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ description: 'Birth date of the user' })
  @IsNotEmpty()
  @Transform(({ value }) => new Date(value))
  birthDate: Date;

  @ApiProperty({ description: 'CPF of the user' })
  @IsString()
  @IsNotEmpty()
  cpf: string;

  @ApiProperty({ description: 'Gender of the user' })
  @IsString()
  @IsNotEmpty()
  gender: string;

  @ApiProperty({ description: 'Address of the user' })
  @IsString()
  @IsNotEmpty()
  address: string;
}