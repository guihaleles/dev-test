import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('passengers')
export class PassengerOrmEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;

    @Column()
    birthDate: Date;

    @Column({ unique: true })
    cpf: string;

    @Column()
    gender: string;

    @Column()
    address: string;
}