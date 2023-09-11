import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EmpleadosModule } from './empleados/empleados.module';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './AUTH/auth.module';

@Module({
  imports: [EmpleadosModule, PrismaModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
