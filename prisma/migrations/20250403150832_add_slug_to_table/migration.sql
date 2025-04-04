/*
  Warnings:

  - A unique constraint covering the columns `[slug]` on the table `Table` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `slug` to the `Table` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Table" ADD COLUMN     "slug" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Table_slug_key" ON "Table"("slug");
