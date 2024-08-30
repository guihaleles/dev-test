import { Controller, Get, Post, Put, Delete, Param, Body, NotFoundException } from '@nestjs/common';

import { User } from '../../domain/entities/user.entity';
import { UserService } from 'src/core/application/services/user.service';
import { CreateUpdateUserDto } from '../dtos/create-user.dto';
import { ICreateUser } from 'src/core/application/commands/create-user.interface';

@Controller()
export abstract class UserController<T extends User> {
  constructor(private readonly userService: UserService<T>) {}

  @Get(':id')
  async findById(@Param('id') id: string): Promise<T> {
    const user = await this.userService.findById(id);
    return user;
  }

  @Get()
  async findAll(): Promise<T[]> {
    return this.userService.findAll();
  }

  @Post()
  async create(@Body() createUserDto: CreateUpdateUserDto): Promise<void> {
    await this.userService.save(createUserDto);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateUserDto: CreateUpdateUserDto): Promise<void> {
    await this.userService.update(id, updateUserDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    await this.userService.delete(id);
  }
}