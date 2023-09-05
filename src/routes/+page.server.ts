import { parseUrl } from '$validation/validUrl';
import type { Actions } from '@sveltejs/kit';
import { db } from '../server/db';

export const actions: Actions = {
	default: async ({ request }) => {
		const data = await request.formData();
		//need to add add support for short and other options in valibot,
		// get whole object formdata instead of just params
		const link = data.get('link');

		let x = 'not found';
		if (link != null) {
			const res = parseUrl(link);
			if (typeof res == 'string') {
				//res is a VALID url!
				console.log(db.add(res));
			} else {
				//res is NOT a valid url
				x = res.message;
			}
		}
	},
};
