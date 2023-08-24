-- CreateTable
CREATE TABLE "Empleados" (
    "empleadoId" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "nombre" TEXT NOT NULL,
    "telefono" TEXT NOT NULL,
    "clave" TEXT NOT NULL,

    CONSTRAINT "Empleados_pkey" PRIMARY KEY ("empleadoId")
);

-- CreateTable
CREATE TABLE "Printers" (
    "printerId" SERIAL NOT NULL,
    "modelo" TEXT NOT NULL,
    "serie" TEXT NOT NULL,
    "empleadoId_FK" INTEGER NOT NULL,

    CONSTRAINT "Printers_pkey" PRIMARY KEY ("printerId")
);

-- CreateIndex
CREATE UNIQUE INDEX "Empleados_email_key" ON "Empleados"("email");

-- AddForeignKey
ALTER TABLE "Printers" ADD CONSTRAINT "Printers_empleadoId_FK_fkey" FOREIGN KEY ("empleadoId_FK") REFERENCES "Empleados"("empleadoId") ON DELETE RESTRICT ON UPDATE CASCADE;
