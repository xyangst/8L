import { Database } from 'bun:sqlite';
import { drizzle } from 'drizzle-orm/bun-sqlite';
import * as schema from './schema';
const sqlite = new Database('sqlite.db');
export const db = drizzle(sqlite, { schema });
export async function add_url(url: string, short = true): Promise<string> {
	const URLSAFE_CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_';

	let len = short ? 3 : 420;
	let generated = '';
	let tries = 0;

	do {
		if (tries > 1) {
			len++;
			tries = 0;
		}
		tries++;
		generated = '';
		for (let index = 0; index < len; index++) {
			generated += URLSAFE_CHARS[Math.floor(Math.random() * URLSAFE_CHARS.length)];
		}
	} while (await db.query.link.findFirst());
	db.insert(schema.link).values({ destination: url, origin: generated });
	return generated;
}
