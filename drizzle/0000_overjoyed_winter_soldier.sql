CREATE TABLE `link` (
	`name` text PRIMARY KEY NOT NULL,
	`destination` text NOT NULL,
	`createdAt` integer DEFAULT CURRENT_TIMESTAMP
);
