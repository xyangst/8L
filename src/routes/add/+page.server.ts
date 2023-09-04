import { parseUrl } from '$validation/validUrl';
import type { Actions } from '@sveltejs/kit';

export const actions: Actions = {
	default: async ({ request }) => {
		//console.log(request);
		const data = await request.formData();
		const link = data.get('link');
		let x = 'not found';
		if (link != null) {
			const res = parseUrl(link);
			if (typeof res == 'string') {
				//res is a VALID url!
				x = res;
			} else {
				//res is NOT a valid url
				x = res.message;
			}
		}
		console.log(x, link);
	}
};
