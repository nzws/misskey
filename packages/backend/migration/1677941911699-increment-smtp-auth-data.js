export class incrementSmtpAuthData1677941911699 {
		name = 'incrementSmtpAuthData1677941911699'

    async up(queryRunner) {
			await queryRunner.query('ALTER TABLE "meta" ALTER COLUMN "smtpHost" TYPE character varying(255)')
			await queryRunner.query('ALTER TABLE "meta" ALTER COLUMN "smtpUser" TYPE character varying(255)')
			await queryRunner.query('ALTER TABLE "meta" ALTER COLUMN "smtpPass" TYPE character varying(255)')
    }

    async down(queryRunner) {
			await queryRunner.query('ALTER TABLE "meta" ALTER COLUMN "smtpHost" TYPE character varying(128)')
			await queryRunner.query('ALTER TABLE "meta" ALTER COLUMN "smtpUser" TYPE character varying(128)')
			await queryRunner.query('ALTER TABLE "meta" ALTER COLUMN "smtpPass" TYPE character varying(128)')
    }

}
