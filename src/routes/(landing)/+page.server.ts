import { db } from '$db/db';
import { link } from '$db/schema';
import type { Actions } from '@sveltejs/kit';
import { sql } from 'drizzle-orm';
import { safeParse } from 'valibot';
import { urlSchema } from './validUrl';

export const actions: Actions = {
	default: async ({ request }) => {
		const form = await request.formData();
		// get whole object formdata instead of just params
		const data: Record<string, unknown> = {};
		for (const [key, value] of form.entries()) {
			data[key] = value;
		}
		if (!data) return;

		const parseForm = safeParse(urlSchema, data);
		if (!parseForm.success) return;
		const res = parseForm.output;

		//the form got validated!!!

		return { success: true, data: { url: await add_url(res.link, res.long == 'on') } };
	},
};
export const load = async () => {
	const queried = await db.select({ count: sql<number>`count(*)` }).from(link);
	console.log(queried);
	return { linkcount: queried[0].count };
};
async function add_url(url: string, short = true): Promise<string> {
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
	} while (
		await db.query.link.findFirst({
			where: (link, { eq }) => eq(link.origin, generated),
		})
	);
	await db.insert(link).values({ destination: url, origin: generated });
	return generated;
}
