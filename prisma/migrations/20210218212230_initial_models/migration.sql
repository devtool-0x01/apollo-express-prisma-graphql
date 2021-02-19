-- CreateTable
CREATE TABLE "Manufacturer" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "description" TEXT
);

-- CreateTable
CREATE TABLE "Vehicle" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "model" TEXT NOT NULL,
    "year" INTEGER NOT NULL,
    "engineType" TEXT,
    "engineSize" INTEGER,
    "manufacturerId" INTEGER NOT NULL,
    FOREIGN KEY ("manufacturerId") REFERENCES "Manufacturer" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Manufacturer.name_unique" ON "Manufacturer"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Vehicle.name_unique" ON "Vehicle"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Vehicle.model_unique" ON "Vehicle"("model");
