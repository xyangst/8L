import { parseUrl } from '$validation/validUrl';
import type { Actions } from '@sveltejs/kit';
import { db } from '../server/db';

export const actions: Actions = {
	default: async ({ request }) => {
		const form = await request.formData();
		// get whole object formdata instead of just params
		const data: Record<string, unknown> = {};
		for (const [key, value] of form.entries()) {
			data[key] = value;
		}

		let x: string | false = 'not found';
		if (data != null) {
			const res = parseUrl(data);
			if (typeof res != 'string') {
				//res is a VALID url!
				x = db.add(res.link, res.long);
				return { success: true, data: { url: x } };
			} else {
				return;
			}
		}
	},
};
