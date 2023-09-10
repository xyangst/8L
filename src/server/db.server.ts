import { env } from '$env/dynamic/private';
import { Redis } from 'ioredis';
class RedisLocal<K, V> extends Map<K, V> {
	exists(key: K): boolean {
		return this.has(key);
	}
}
export const REDIS_CONNECTION =
	import.meta.env.MODE == 'development' ? new RedisLocal() : new Redis(env.REDIS_URL);

const URLSAFE_CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_';

export async function add_url(url: string, short = true): Promise<string> {
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
	} while (await REDIS_CONNECTION.exists(generated));
	REDIS_CONNECTION.set(generated, url);
	return generated;
}
