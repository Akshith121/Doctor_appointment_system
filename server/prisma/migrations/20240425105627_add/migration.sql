/*
  Warnings:

  - Added the required column `five_six` to the `Slot` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Slot" ADD COLUMN     "five_six" INTEGER NOT NULL;
