-- CreateTable
CREATE TABLE "NewsLetterFullBlogSubscription" (
    "id" SERIAL NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "email" TEXT NOT NULL,

    CONSTRAINT "NewsLetterFullBlogSubscription_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ThreadNewsletterSubscription" (
    "id" SERIAL NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "email" TEXT NOT NULL,
    "threadId" INTEGER NOT NULL,

    CONSTRAINT "ThreadNewsletterSubscription_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "NewsLetterFullBlogSubscription_email_key" ON "NewsLetterFullBlogSubscription"("email");

-- AddForeignKey
ALTER TABLE "ThreadNewsletterSubscription" ADD CONSTRAINT "ThreadNewsletterSubscription_threadId_fkey" FOREIGN KEY ("threadId") REFERENCES "Thread"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
