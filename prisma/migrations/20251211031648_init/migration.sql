-- CreateTable
CREATE TABLE "entry" (
    "id" SERIAL NOT NULL,
    "title" VARCHAR NOT NULL,
    "content" VARCHAR NOT NULL,
    "author" VARCHAR NOT NULL,
    "image" VARCHAR NOT NULL,

    CONSTRAINT "entry_pkey" PRIMARY KEY ("id")
);
