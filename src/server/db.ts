const URLSAFE_CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_';
const conf = {
	maxRetries: 1,
	lengths: {
		short: 3,
		long: 420,
	},
};
class DB {
	private urls: Map<string, string> = new Map().set('asdf', 'hello world');
	add(url: string, short = true) {
		const len = short ? conf.lengths.short : conf.lengths.long;
		let generated = '';
		let tries = 0;

		do {
			if (tries > conf.maxRetries) return false;
			tries++;
			generated = randomURLSAFE(len);
		} while (this.urls.has(generated));
		this.urls.set(generated, url);
		return generated;
	}
	read(key: string) {
		return this.urls.get(key);
	}
}

export const db = new DB();
function randomURLSAFE(len: number) {
	let str = '';
	for (let index = 0; index < len; index++) {
		str += URLSAFE_CHARS[Math.floor(Math.random() * URLSAFE_CHARS.length)];
	}
	return str;
}
