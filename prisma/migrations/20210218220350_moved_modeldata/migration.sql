/*
  Warnings:

  - You are about to drop the column `model` on the `Vehicle` table. All the data in the column will be lost.
  - Added the required column `vehicleId` to the `VehicleModel` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Vehicle" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "year" INTEGER NOT NULL,
    "engineType" TEXT,
    "engineSize" INTEGER,
    "manufacturerId" INTEGER NOT NULL,
    FOREIGN KEY ("manufacturerId") REFERENCES "Manufacturer" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_Vehicle" ("id", "name", "year", "engineType", "engineSize", "manufacturerId") SELECT "id", "name", "year", "engineType", "engineSize", "manufacturerId" FROM "Vehicle";
DROP TABLE "Vehicle";
ALTER TABLE "new_Vehicle" RENAME TO "Vehicle";
CREATE UNIQUE INDEX "Vehicle.name_unique" ON "Vehicle"("name");
CREATE TABLE "new_VehicleModel" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "year" INTEGER,
    "vehicleId" INTEGER NOT NULL,
    FOREIGN KEY ("vehicleId") REFERENCES "Vehicle" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_VehicleModel" ("id", "name", "year") SELECT "id", "name", "year" FROM "VehicleModel";
DROP TABLE "VehicleModel";
ALTER TABLE "new_VehicleModel" RENAME TO "VehicleModel";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
