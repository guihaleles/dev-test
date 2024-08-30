import { NotFoundException } from "@nestjs/common";
import { User } from "src/core/domain/entities/user.entity";
import { IUserRepository } from "src/core/domain/repositories/user.repository.interface";
import { ICreateUser } from "../commands/create-user.interface";

export abstract class UserService <T extends User> {
    constructor(private readonly userServiceRepository: IUserRepository<T>) {}

    async findById(id: string): Promise<T | null> {
        const user = await this.userServiceRepository.findById(id);
        if (!user) {
            throw new NotFoundException('User not found');
        }
        return user;
    }

    async findAll(): Promise<T[]> {
        return this.userServiceRepository.findAll();
    }

    async delete(id: string): Promise<void> {
        return this.userServiceRepository.delete(id);
    }

    abstract save(user: ICreateUser): Promise<void>;

    abstract update(id: string, user: ICreateUser): Promise<void>;
}