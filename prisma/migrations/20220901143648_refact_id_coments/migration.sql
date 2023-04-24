/*
  Warnings:

  - A unique constraint covering the columns `[id]` on the table `coments` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE `coments` MODIFY `id` INTEGER NOT NULL AUTO_INCREMENT;

-- CreateIndex
CREATE UNIQUE INDEX `id_UNIQUE` ON `coments`(`id`);
