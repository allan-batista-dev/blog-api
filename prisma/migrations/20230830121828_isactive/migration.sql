-- AlterTable
ALTER TABLE "Thread" ADD COLUMN     "isActive" BOOLEAN NOT NULL DEFAULT true;

-- AlterTable
ALTER TABLE "posts" ADD COLUMN     "isActive" BOOLEAN NOT NULL DEFAULT true;
