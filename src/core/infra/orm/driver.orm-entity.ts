import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('drivers')
export class DriverOrmEntity {
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