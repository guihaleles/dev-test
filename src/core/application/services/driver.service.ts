import { Driver } from "src/core/domain/entities/driver.entity";
import { UserService } from "./user.service";
import { IDriverRepository } from "src/core/domain/repositories/driver.repository.interface";
import { ICreateDriver } from "../commands/create-driver.interface";
import { ICreateUser } from "../commands/create-user.interface";
import { UserId } from "src/core/domain/value-objects/id.vo";
import { NotFoundException } from "@nestjs/common";

export class DriverService extends UserService<Driver>{
   
   constructor(private readonly driverServiceRepository: IDriverRepository) {
       super(driverServiceRepository);
   }

    async save(driver: ICreateDriver): Promise<void> {
        const newDriver = new Driver(
            new UserId(),
            driver.name,
            driver.birthDate,
            driver.cpf,
            driver.gender,
            driver.address
        );

        return this.driverServiceRepository.save(newDriver);
    }

    async update(id: string, updateDriver: ICreateDriver): Promise<void> {
        const driver = await this.driverServiceRepository.findById(id);
        if (!driver) {
            throw new NotFoundException('Driver not found');
        }

        const newDriver = new Driver(
            new UserId(driver.getId()),
            updateDriver.name,
            updateDriver.birthDate,
            updateDriver.cpf,
            updateDriver.gender,
            updateDriver.address
        );
        return this.driverServiceRepository.update(newDriver);
    }
}