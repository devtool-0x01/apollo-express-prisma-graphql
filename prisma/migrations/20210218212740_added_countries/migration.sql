/*
  Warnings:

  - Added the required column `countryId` to the `Manufacturer` table without a default value. This is not possible if the table is not empty.

*/
-- CreateTable
CREATE TABLE "Country" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "countryCode" TEXT NOT NULL
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Manufacturer" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "countryId" INTEGER NOT NULL,
    FOREIGN KEY ("countryId") REFERENCES "Country" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_Manufacturer" ("id", "name", "description") SELECT "id", "name", "description" FROM "Manufacturer";
DROP TABLE "Manufacturer";
ALTER TABLE "new_Manufacturer" RENAME TO "Manufacturer";
CREATE UNIQUE INDEX "Manufacturer.name_unique" ON "Manufacturer"("name");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
