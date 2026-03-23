CREATE TABLE `profession_tasks` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`profession_id` integer NOT NULL,
	`title` text NOT NULL,
	`description` text,
	`task_type` text NOT NULL,
	`difficulty` text NOT NULL,
	`xp_reward` integer NOT NULL,
	`token_reward` integer NOT NULL,
	`category` text,
	`prerequisites` text,
	`is_active` integer DEFAULT true,
	`created_at` integer,
	FOREIGN KEY (`profession_id`) REFERENCES `professions`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `professions` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`name` text NOT NULL,
	`category` text NOT NULL,
	`description` text,
	`icon` text,
	`difficulty` text DEFAULT 'beginner',
	`created_at` integer
);
--> statement-breakpoint
CREATE TABLE `user_task_submissions` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`user_id` integer NOT NULL,
	`task_id` integer NOT NULL,
	`submission_text` text,
	`submission_url` text,
	`ai_feedback` text,
	`is_correct` integer,
	`evaluated_at` integer,
	`created_at` integer,
	FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`task_id`) REFERENCES `profession_tasks`(`id`) ON UPDATE no action ON DELETE no action
);
