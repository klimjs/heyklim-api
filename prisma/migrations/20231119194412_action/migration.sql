-- CreateTable
CREATE TABLE "Action" (
    "id" SERIAL NOT NULL,
    "screenId" INTEGER NOT NULL,
    "blockId" INTEGER NOT NULL,
    "targetId" INTEGER,

    CONSTRAINT "Action_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Action" ADD CONSTRAINT "Action_screenId_fkey" FOREIGN KEY ("screenId") REFERENCES "Screen"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Action" ADD CONSTRAINT "Action_blockId_fkey" FOREIGN KEY ("blockId") REFERENCES "Block"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Action" ADD CONSTRAINT "Action_targetId_fkey" FOREIGN KEY ("targetId") REFERENCES "Screen"("id") ON DELETE CASCADE ON UPDATE CASCADE;
