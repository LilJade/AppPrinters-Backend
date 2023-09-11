import { PrismaService } from "src/prisma/prisma.service";
import { AuthController } from "./auth.controller";
import { JwtStrategy } from "./jwt.strategy";
import { EmpleadosService } from "src/empleados/empleados.service";
import { AuthService } from "./auth.service";
import { EmpleadosModule } from "src/empleados/empleados.module";
import { PassportModule } from "@nestjs/passport";
import { Module } from "@nestjs/common";
import { JwtModule } from '@nestjs/jwt';

@Module({
    controllers: [AuthController],
    providers: [AuthService, PrismaService, JwtStrategy, EmpleadosService],
    imports: [EmpleadosModule, PassportModule, JwtModule.register({
        secret: process.env.CLAVE_SECRETA,
        signOptions: {
            expiresIn: 3600
        }
    })],
})
export class AuthModule {}
