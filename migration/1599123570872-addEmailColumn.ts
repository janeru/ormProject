import {MigrationInterface, QueryRunner} from "typeorm";

export class addEmailColumn1599123570872 implements MigrationInterface {
    name = 'addEmailColumn1599123570872'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `user` ADD `email` varchar(255) NOT NULL");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `user` DROP COLUMN `email`");
    }

}
