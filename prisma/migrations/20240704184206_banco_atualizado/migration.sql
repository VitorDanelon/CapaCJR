/*
  Warnings:

  - Added the required column `nome` to the `LABEL` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated` to the `LABEL` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated` to the `Task` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "LABEL" ADD COLUMN     "created" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "is_active" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "nome" TEXT NOT NULL,
ADD COLUMN     "updated" TIMESTAMP(3) NOT NULL,
ALTER COLUMN "text" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Task" ADD COLUMN     "updated" TIMESTAMP(3) NOT NULL;
