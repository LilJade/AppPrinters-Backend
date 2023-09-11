import { PartialType } from '@nestjs/mapped-types';
import { CreateEmpleadoDto } from './create-empleado.dto';
import { IsEmail, IsNotEmpty, MinLength } from "class-validator"

export class UpdateEmpleadoDto {
    @IsNotEmpty({message: "El nombre no puede estar vacío"})
    empleadoId: number

    @IsNotEmpty({message: "El nombre no puede estar vacío"})
    nombre: string

    @IsNotEmpty({message: "El telefono no puede estar vacío"})
    telefono: string

    @IsNotEmpty({message: "La contraseña no debe estar vacía!.."})
    @MinLength(6, {message: "La contraseña debe tener al menos 6 caracteres"})
    clave: string
}
