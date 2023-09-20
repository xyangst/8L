import { parseUrl } from './validUrl';
import type { Actions } from '@sveltejs/kit';
import { add_url } from '../../server/db.server';

export const actions: Actions = {
	default: async ({ request }) => {
		const form = await request.formData();
		// get whole object formdata instead of just params
		const data: Record<string, unknown> = {};
		for (const [key, value] of form.entries()) {
			data[key] = value;
		}
		if (data != null) {
			const res = parseUrl(data);
			if (typeof res != 'string') {
				//res is a VALID url!
				return { success: true, data: { url: await add_url(res.link, res.long) } };
			} else {
				return;
			}
		}
	},
};
