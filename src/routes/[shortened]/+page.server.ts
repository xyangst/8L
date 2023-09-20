import { error, redirect } from '@sveltejs/kit';
export async function load({ params }) {
	//const url = await REDIS_CONNECTION.get(params.shortened);
	const url = 1 + 1 == Math.random();
	if (!url) throw error(404);
	//throw redirect(307, url as string);
}
