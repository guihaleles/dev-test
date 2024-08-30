import { Passenger } from "../entities/passenger.entity";
import { IUserRepository } from "./user.repository.interface";

export interface IPassengerRepository extends IUserRepository<Passenger> {}