import { IsEmail, IsNotEmpty, MinLength } from "class-validator"

export class CreateEmpleadoDto {
    @IsNotEmpty({message: "El correo no puede estar vacío!.."})
    @IsEmail({}, {message: "Este correo no es valido!.."})
    email: string

    @IsNotEmpty({message: "El nombre no puede estar vacío"})
    nombre: string

    @IsNotEmpty({message: "El telefono no puede estar vacío"})
    telefono: string

    @IsNotEmpty({message: "La contraseña no debe estar vacía!.."})
    @MinLength(6, {message: "La contraseña debe tener al menos 6 caracteres"})
    clave: string
}
