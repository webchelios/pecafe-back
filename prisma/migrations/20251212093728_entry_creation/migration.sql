-- CreateTable
CREATE TABLE "entry" (
    "id" SERIAL NOT NULL,
    "title" VARCHAR NOT NULL,
    "content" VARCHAR NOT NULL,
    "author" VARCHAR,
    "image" VARCHAR,

    CONSTRAINT "entry_pkey" PRIMARY KEY ("id")
);
