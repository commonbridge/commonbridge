/*
  Warnings:

  - You are about to drop the column `authProviders` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "authProviders",
ADD COLUMN     "authProvider" TEXT,
ADD COLUMN     "authToken" TEXT;
