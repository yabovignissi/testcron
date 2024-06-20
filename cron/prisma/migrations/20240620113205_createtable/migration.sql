-- CreateTable
CREATE TABLE "Task" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "daysOfWeek" INTEGER[],
    "time" TEXT NOT NULL,
    "timezone" TEXT NOT NULL,
    "lastExecutedAt" TIMESTAMP(3),

    CONSTRAINT "Task_pkey" PRIMARY KEY ("id")
);
