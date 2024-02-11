-- CreateTable
CREATE TABLE "PollOptions" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "pollId" TEXT NOT NULL,

    CONSTRAINT "PollOptions_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "PollOptions" ADD CONSTRAINT "PollOptions_pollId_fkey" FOREIGN KEY ("pollId") REFERENCES "Poll"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
