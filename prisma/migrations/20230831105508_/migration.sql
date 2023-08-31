-- AlterTable
ALTER TABLE "NewsLetterFullBlogSubscription" ADD COLUMN     "usersId" INTEGER;

-- AddForeignKey
ALTER TABLE "NewsLetterFullBlogSubscription" ADD CONSTRAINT "NewsLetterFullBlogSubscription_usersId_fkey" FOREIGN KEY ("usersId") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;
