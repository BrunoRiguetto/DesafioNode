-- DropForeignKey
ALTER TABLE `favorites` DROP FOREIGN KEY `fk_users_has_music_letter_music_letter1`;

-- DropForeignKey
ALTER TABLE `favorites` DROP FOREIGN KEY `fk_users_has_music_letter_users1`;

-- AddForeignKey
ALTER TABLE `favorites` ADD CONSTRAINT `fk_users_has_music_letter_music_letter1` FOREIGN KEY (`music_letter_id`) REFERENCES `music_letter`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `favorites` ADD CONSTRAINT `fk_users_has_music_letter_users1` FOREIGN KEY (`users_id`) REFERENCES `users`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION;
