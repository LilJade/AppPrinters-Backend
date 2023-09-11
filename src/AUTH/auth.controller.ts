import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AuthService } from "./auth.service";
import { CreateEmpleadoDto } from "src/empleados/dto/create-empleado.dto";
import { LoginEmpleadoDto } from 'src/empleados/dto/login-empleado.dto';

@Controller('auth')
export class AuthController {
    
    constructor(private readonly empleadosService: AuthService) {}

    @Post('/create')
    create( @Body() createEmpleadoDto : CreateEmpleadoDto ) {
        return this.empleadosService.create(createEmpleadoDto);
    }

    @Post('/login')
    login( @Body() loginEmpleadoDto : LoginEmpleadoDto ) {
        return this.empleadosService.login(loginEmpleadoDto);
    }


}