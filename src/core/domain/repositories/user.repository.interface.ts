import { User } from '../entities/user.entity';

export abstract class IUserRepository <T extends User> {
    abstract save(user: T): Promise<void>;
    abstract findById(id: string): Promise<T | null>;
    abstract findAll(): Promise<T[]>;
    abstract delete(id: string): Promise<void>;
    abstract update(user: T): Promise<void>;
}