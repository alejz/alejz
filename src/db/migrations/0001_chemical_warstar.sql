ALTER TABLE `users` ADD `email_verified` integer DEFAULT false;--> statement-breakpoint
ALTER TABLE `users` ADD `is_active` integer DEFAULT true;--> statement-breakpoint
ALTER TABLE `users` ADD `last_login_at` integer;--> statement-breakpoint
ALTER TABLE `users` ADD `password_reset_token` text;--> statement-breakpoint
ALTER TABLE `users` ADD `password_reset_expires` integer;