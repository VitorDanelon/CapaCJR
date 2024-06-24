-- AlterTable
ALTER TABLE "Task" ADD COLUMN     "labelId" INTEGER;

-- CreateTable
CREATE TABLE "LABEL" (
    "id" SERIAL NOT NULL,
    "text" TEXT NOT NULL,

    CONSTRAINT "LABEL_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Task" ADD CONSTRAINT "Task_labelId_fkey" FOREIGN KEY ("labelId") REFERENCES "LABEL"("id") ON DELETE SET NULL ON UPDATE CASCADE;
