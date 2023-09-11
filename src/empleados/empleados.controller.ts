import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { EmpleadosService } from './empleados.service';
import { CreateEmpleadoDto } from './dto/create-empleado.dto';
import { UpdateEmpleadoDto } from './dto/update-empleado.dto';
import { JwtAuthGuard } from 'src/AUTH/auth.guard';
import { PrismaService } from 'src/prisma/prisma.service';
import { SearchEmpleadoByEmailDto } from './dto/searchByEmail-empleado.dto';
import { SearchEmpleadoByIdDto } from './dto/searchById-empleado.dto';

@Controller('empleados')
@UseGuards(JwtAuthGuard)
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

  /*@Get('/findByEmail')
  async findByEmail(@Body() {email}: SearchEmpleadoByEmailDto) {
    return await this.prismaService.empleados.findUnique({
      where: {
        email
      }
    })
  }

  @Get('/findById')
  async findById(@Body() {empleadoId}: SearchEmpleadoByIdDto) {
    return ;
  }*/

  /*
  @Post('/login')
    login( @Body() loginEmpleadoDto : LoginEmpleadoDto ) {
        return this.empleadosService.login(loginEmpleadoDto);
    }
  */

/*  remove(id: number) {
    return ;
  }*/
}
