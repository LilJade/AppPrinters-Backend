import { PartialType } from '@nestjs/mapped-types';
import { CreateEmpleadoDto } from './create-empleado.dto';
import { IsEmail, IsNotEmpty, IsNumber, MinLength } from "class-validator"

export class SearchEmpleadoByIdDto {
    @IsNumber()
    empleadoId: number
}
