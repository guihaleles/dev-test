import { Passenger } from "src/core/domain/entities/passenger.entity";
import { UserService } from "./user.service";
import { IPassengerRepository } from "src/core/domain/repositories/passenger.repository.interface";
import { ICreateUser } from "../commands/create-user.interface";
import { ICreatePassenger } from "../commands/create-passenger.interface";
import { UserId } from "src/core/domain/value-objects/id.vo";
import { Inject, NotFoundException } from "@nestjs/common";

export class PassengerService extends UserService<Passenger>{

    constructor(
        @Inject('IPassengerRepository')
        private readonly passengerRepository: IPassengerRepository) {
        super(passengerRepository);
    }

    async save(passenger: ICreatePassenger): Promise<void> {
        const newDriver = new Passenger(
            new UserId(),
            passenger.name,
            passenger.birthDate,
            passenger.cpf,
            passenger.gender,
            passenger.address
        );

        return this.passengerRepository.save(newDriver);
    }

    async update(id: string, updatePassenger: ICreatePassenger): Promise<void> {
        const passenger = await this.passengerRepository.findById(id);
        if (!passenger) {
            throw new NotFoundException('Passenger not found');
        }

        const newPassenger = new Passenger(
            new UserId(passenger.getId()),
            updatePassenger.name,
            updatePassenger.birthDate,
            updatePassenger.cpf,
            updatePassenger.gender,
            updatePassenger.address
        );
        return this.passengerRepository.update(newPassenger);
    }
 }