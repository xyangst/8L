import { sql } from 'drizzle-orm';
import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core';

export const link = sqliteTable('link', {
	origin: text('name').primaryKey(),
	destination: text('destination').notNull(),
	createdAt: integer('createdAt').default(sql`CURRENT_TIMESTAMP`),
});
