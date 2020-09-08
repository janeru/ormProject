import {MigrationInterface, QueryRunner} from "typeorm";

export class addEmailColumn1599123622314 implements MigrationInterface {
    name = 'addEmailColumn1599123622314'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ADD "email" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "email"`);
    }

}
