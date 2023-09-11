import { Injectable } from '@nestjs/common';
import { CreateEmpleadoDto } from './dto/create-empleado.dto';
import { UpdateEmpleadoDto } from './dto/update-empleado.dto';
import { CreateEmpleado } from './interface/create-empleado.interface';
import { PrismaService } from 'src/prisma/prisma.service';
import * as bcrypt from 'bcryptjs';
import { UpdateEmpleado } from './interface/update-empleado.interface';

@Injectable()
export class EmpleadosService {

  constructor(private readonly prismaService : PrismaService) {}

  async create({email, nombre, telefono, clave} : CreateEmpleado) {
    const claveEncrypt = await bcrypt.hash(clave, 10)
    const empleado = await this.prismaService.empleados.create({
      data: {
        email,
        nombre,
        telefono,
        clave: claveEncrypt
      }
    })

    return empleado;
  }

  findAll() {
    return this.prismaService.empleados.findMany();
  }

  findByEmail(email: string) {
    return this.prismaService.empleados.findUnique({
      where: {
        email
      }
    });
  }

  findById(id: number) {
    return this.prismaService.empleados.findUnique({
      where: {
        empleadoId: id
      }
    });
  }

  async update(updateEmpleado: UpdateEmpleado) {
    const claveEncrypt = await bcrypt.hash(updateEmpleado.clave, 10);

    return await this.prismaService.empleados.update({
      where: {
        empleadoId: updateEmpleado.empleadoId
      },
      data: {
        nombre: updateEmpleado.nombre,
        telefono: updateEmpleado.telefono,
        clave: claveEncrypt
      }
    });
  }

  remove(id: number) {
    return this.prismaService.empleados.delete({
      where: {
        empleadoId: id
      }
    });
  }
}
