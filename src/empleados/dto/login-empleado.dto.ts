import { IsNotEmpty, IsEmail, MinLength } from 'class-validator'

export class LoginEmpleadoDto {
    @IsNotEmpty({message: "El correo no puede estar vacío!.."})
    @IsEmail({}, {message: "Este correo no es valido!.."})
    email: string

    @IsNotEmpty({message: "La contraseña no debe estar vacía!.."})
    @MinLength(6, {message: "La contraseña debe tener al menos 6 caracteres"})
    clave: string
}
