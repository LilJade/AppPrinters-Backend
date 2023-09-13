import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { EmpleadosService } from './empleados.service';
import { CreateEmpleadoDto } from './dto/create-empleado.dto';
import { UpdateEmpleadoDto } from './dto/update-empleado.dto';
import { JwtAuthGuard } from 'src/AUTH/auth.guard';
import { PrismaService } from 'src/prisma/prisma.service';
import { SearchEmpleadoByEmailDto } from './dto/searchByEmail-empleado.dto';
import { SearchEmpleadoByIdDto } from './dto/searchById-empleado.dto';
import { ApiBearerAuth } from '@nestjs/swagger';

@Controller('empleados')
@UseGuards(JwtAuthGuard)
@ApiBearerAuth()
export class EmpleadosController {
  constructor(private readonly empleadosService: EmpleadosService) {}

  @Get()
  async findAll() {
    return this.empleadosService.findAll();
  }

  @Patch()
  async update(@Body() updateEmpleadoDto: UpdateEmpleadoDto) {
    return this.empleadosService.update(updateEmpleadoDto);
  }

  @Delete()
  async remove(@Body() {empleadoId}: SearchEmpleadoByIdDto) {
    return this.empleadosService.remove(empleadoId);
  }

  @Post('/findByEmail')
  async findByEmail(@Body() {email}: SearchEmpleadoByEmailDto) {
    return this.empleadosService.findByEmail(email);
  }

  @Post('/findById')
  async findById(@Body() {empleadoId}: SearchEmpleadoByIdDto) {
    return this.empleadosService.findById(empleadoId);
  }

  @Post('/findPrinters')
  async findPrintersOfEmpleado(@Body() {email}: SearchEmpleadoByEmailDto) {
    return this.empleadosService.findAllPrintersOfEmpleado(email);
  }
}
