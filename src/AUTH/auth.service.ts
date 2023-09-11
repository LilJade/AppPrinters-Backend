import { HttpException, Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { EmpleadosService } from "src/empleados/empleados.service";
import { LoginEmpleado } from "src/empleados/interface/login-empleado.interface";
import { PrismaService } from "src/prisma/prisma.service";
import * as bcrypt from "bcryptjs";
import { CreateEmpleado } from "src/empleados/interface/create-empleado.interface";

@Injectable()
export class AuthService {
    constructor(
        private readonly prismaService: PrismaService,
        private jwtService: JwtService,
        private readonly empleadosService: EmpleadosService
    ) {}

    async login({email, clave} : LoginEmpleado) : Promise<any> {
        
        const claveEncrypt = await bcrypt.hash(clave, 10);
        const empleadoExistente = await this.prismaService.empleados.findUnique({
            where: {
                email
            }
        })

        if (empleadoExistente) {
            const claveCorrecta = await bcrypt.compare(clave, empleadoExistente.clave);

            if(!claveCorrecta) {
                throw new HttpException("La clave es incorrecta.",400);
            } else {
                const token = this.jwtService.sign({
                    email: empleadoExistente.email,
                    nombre: empleadoExistente.nombre
                })

                return token;
            }
        } else {
            throw new HttpException("El usuario no existe.",400);
        }
    }

    async create({email, nombre, telefono, clave} : CreateEmpleado) {
        const claveEncrypt = await bcrypt.hash(clave, 10);
        const empleadoExistente = await this.prismaService.empleados.findUnique({
            where: {
                email
            }
        })

        if (empleadoExistente) {
            throw new HttpException("El usuario ya existe, no puede registrar.",409);
        }

        const empleado = await this.prismaService.empleados.create({
            data: {
                email,
                nombre,
                telefono,
                clave: claveEncrypt
            },
        });

        const token = this.jwtService.sign({
            email: empleado.email,
            nombre: empleado.nombre
        })

        return token;
    }
}