import { Injectable } from '@nestjs/common';
import { CreateEmpleadoDto } from './dto/create-empleado.dto';
import { UpdateEmpleadoDto } from './dto/update-empleado.dto';
import { CreateEmpleado } from './interface/create-empleado.interface';
import { PrismaService } from 'src/prisma/prisma.service';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class EmpleadosService {

  constructor(private readonly prismaService : PrismaService) {}

  async create({email, nombre, telefono, clave} : CreateEmpleado) {
    const claveEncrypt = await bcrypt.hash(clave, 9)
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
    return `This action returns all empleados`;
  }

  findOne(id: number) {
    return `This action returns a #${id} empleado`;
  }

  update(id: number, updateEmpleadoDto: UpdateEmpleadoDto) {
    return `This action updates a #${id} empleado`;
  }

  remove(id: number) {
    return `This action removes a #${id} empleado`;
  }
}
