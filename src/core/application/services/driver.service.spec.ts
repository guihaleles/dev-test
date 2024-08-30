import { Test, TestingModule } from '@nestjs/testing';
import { DriverService } from './driver.service';

import { NotFoundException } from '@nestjs/common';

import { ICreateDriver } from '../commands/create-driver.interface';
import { UserId } from 'src/core/domain/value-objects/id.vo';
import { Driver } from 'src/core/domain/entities/driver.entity';
import { DriverRepository } from 'src/core/domain/repositories/driver.repository.interface';

class MockDriverRepository implements DriverRepository {
  update = jest.fn();
  findById = jest.fn();
  findAll = jest.fn();
  delete = jest.fn();
  save = jest.fn();
}

describe('DriverService', () => {
  let service: DriverService;
  let repository: MockDriverRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        DriverService,
        {
          provide: DriverRepository,
          useClass: MockDriverRepository,
        },
      ],
    }).compile();

    service = module.get<DriverService>(DriverService);
    repository = module.get<DriverRepository>(DriverRepository) as MockDriverRepository;
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('save', () => {
    it('should call save on the repository with a new Driver', async () => {
      const driverData: ICreateDriver = {
        name: 'Test Driver',
        birthDate: new Date(),
        cpf: '12345678900',
        gender: 'male',
        address: '123 Test St',
      };

      await service.save(driverData);

      expect(repository.save).toHaveBeenCalledWith(expect.any(Driver));
      const savedDriver = repository.save.mock.calls[0][0];
      expect(savedDriver.name).toBe(driverData.name);
      expect(savedDriver.birthDate).toBe(driverData.birthDate);
      expect(savedDriver.cpf).toBe(driverData.cpf);
      expect(savedDriver.gender).toBe(driverData.gender);
      expect(savedDriver.address).toBe(driverData.address);
      expect(savedDriver.id).toBeInstanceOf(UserId);
    });
  });
});