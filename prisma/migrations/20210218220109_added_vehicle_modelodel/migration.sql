-- DropIndex
DROP INDEX "Vehicle.model_unique";

-- CreateTable
CREATE TABLE "VehicleModel" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "year" INTEGER
);
