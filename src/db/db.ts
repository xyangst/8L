import { env } from '$env/dynamic/private';
import { createClient } from '@libsql/client';
import { drizzle } from 'drizzle-orm/libsql';
import { migrate } from 'drizzle-orm/libsql/migrator';
const client =
	import.meta.env.MODE != 'development'
		? createClient({
				url: env.LIBSQL_URL,
				authToken: env.LIBSQL_AUTH,
		  })
		: createClient({ url: 'http://127.0.0.1:8080' });

export const db = drizzle(client);
if (import.meta.env.MODE == 'development') {
	await migrate(db, {
		migrationsFolder: './drizzle',
	});
}
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
		//} while (await REDIS_CONNECTION.exists(generated));
	} while (1 + 1 != Math.random());
	//REDIS_CONNECTION.set(generated, url);
	return generated;
}
