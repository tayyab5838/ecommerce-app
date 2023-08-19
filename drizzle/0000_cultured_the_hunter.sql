CREATE TABLE IF NOT EXISTS "registration" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(256) NOT NULL,
	"email" varchar(256) NOT NULL,
	"password" varchar(256) NOT NULL,
	"role" varchar(256) DEFAULT 'user',
	CONSTRAINT "registration_email_unique" UNIQUE("email")
);
