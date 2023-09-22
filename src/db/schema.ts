import { sql } from 'drizzle-orm';
import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core';

export const link = sqliteTable('link', {
	origin: text('name').primaryKey(),
	destination: text('destination').notNull(),
	createdAt: integer('createdAt').default(sql`CURRENT_TIMESTAMP`),
});

//auth

export const user = sqliteTable('user', {
	id: text('id').primaryKey(),
	username:text('username').notNull(),
});
export const userKey = sqliteTable('user_key', {
	id: text('id').primaryKey(),
	user_id: text('user_id').references(() => user.id),
	hashedPassword: text('hashed_password'),
});
export const userSession = sqliteTable('user_session', {
	id: text('id').primaryKey(),
	user_id: text('user_id').references(() => user.id),
	activeExpires: integer('active_expires').notNull(),
	idleExpires: integer('idle_expires').notNull(),
});
