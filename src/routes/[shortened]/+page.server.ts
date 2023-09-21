import { error, redirect } from '@sveltejs/kit';
import { db } from '../../db/db.js';
export async function load({ params }) {
	const url = await db.query.link.findFirst({
		where: (link, { eq }) => eq(link.origin, params.shortened),
	});
	if (!url) throw error(404);
	throw redirect(307, url.destination as string);
}
