import { error, redirect } from '@sveltejs/kit';
import { db } from '../../server/db.js';
export function load({ params }) {
	const url = db.read(params.slug);
	if (!url) throw error(404);
	throw redirect(307, url);
}
