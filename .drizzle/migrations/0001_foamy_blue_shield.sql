CREATE TABLE `blog_to_category` (
	`blog_id` int NOT NULL,
	`category_slug` int NOT NULL,
	CONSTRAINT `blog_to_category_blog_id_category_slug` PRIMARY KEY(`blog_id`,`category_slug`)
);
--> statement-breakpoint
CREATE TABLE `blogs` (
	`id` int AUTO_INCREMENT NOT NULL,
	`title` varchar(255) NOT NULL,
	`slug` varchar(255) NOT NULL,
	`content` varchar(2000) NOT NULL,
	`thumbnail` varchar(255) NOT NULL DEFAULT 'https://images.unsplash.com/photo-1685728399140-5650bbcfc015?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1060&q=80',
	`published` boolean NOT NULL DEFAULT true,
	`views` int NOT NULL DEFAULT 0,
	`rating` decimal(2,1) NOT NULL DEFAULT '0.0',
	`created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
	`updated_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
	`author_id` varchar(50) NOT NULL,
	CONSTRAINT `blogs_id` PRIMARY KEY(`id`),
	CONSTRAINT `slug_unique_idx` UNIQUE(`slug`)
);
--> statement-breakpoint
CREATE TABLE `categories` (
	`slug` varchar(50) NOT NULL,
	`title` varchar(50) NOT NULL,
	`thumbnail` varchar(255) NOT NULL DEFAULT 'https://images.unsplash.com/photo-1685728399140-5650bbcfc015?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1060&q=80',
	`created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
	CONSTRAINT `categories_slug` PRIMARY KEY(`slug`)
);
--> statement-breakpoint
CREATE TABLE `roles` (
	`slug` varchar(25) NOT NULL,
	`title` varchar(50) NOT NULL,
	`created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
	CONSTRAINT `roles_slug` PRIMARY KEY(`slug`)
);
--> statement-breakpoint
ALTER TABLE `users` MODIFY COLUMN `id` varchar(50) NOT NULL;--> statement-breakpoint
ALTER TABLE `users` MODIFY COLUMN `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP;--> statement-breakpoint
ALTER TABLE `users` ADD `full_name` varchar(100) NOT NULL;--> statement-breakpoint
ALTER TABLE `users` ADD `age` int;--> statement-breakpoint
ALTER TABLE `users` ADD `gender` enum('male','female') NOT NULL;--> statement-breakpoint
ALTER TABLE `users` ADD `role_slug` varchar(25) NOT NULL;--> statement-breakpoint
CREATE INDEX `published_idx` ON `blogs` (`published`);--> statement-breakpoint
ALTER TABLE `users` ADD CONSTRAINT `users_role_slug_roles_slug_fk` FOREIGN KEY (`role_slug`) REFERENCES `roles`(`slug`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `users` DROP COLUMN `name`;--> statement-breakpoint
ALTER TABLE `users` DROP COLUMN `role`;--> statement-breakpoint
ALTER TABLE `users` DROP COLUMN `updated_at`;--> statement-breakpoint
ALTER TABLE `blogs` ADD CONSTRAINT `blogs_author_id_users_id_fk` FOREIGN KEY (`author_id`) REFERENCES `users`(`id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `users` ADD CONSTRAINT `email_unique_idx` UNIQUE(`email`);