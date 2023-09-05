import { error, redirect } from '@sveltejs/kit';
import { REDIS_CONNECTION } from '../../server/db.server';
export async function load({ params }) {
	const url = await REDIS_CONNECTION.get(params.slug);
	if (!url) throw error(404);
	throw redirect(307, url);
}
