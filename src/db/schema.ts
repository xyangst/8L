import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core';

export const link = sqliteTable('link', {
	origin: text('name').primaryKey(),
	destination: text('destination').notNull(),
	id: integer('id'),
});
