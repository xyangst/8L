import { dev } from '$app/environment';
import { libsql } from '@lucia-auth/adapter-sqlite';
import { lucia } from 'lucia';
import { sveltekit } from 'lucia/middleware';
import { client } from './db';
import { github } from '@lucia-auth/oauth/providers';
import { GITHUB_CLIENT_ID, GITHUB_CLIENT_SECRET } from '$env/static/private';
export const auth = lucia({
	adapter: libsql(client, {
		user: 'user',
		key: 'user_key',
		session: 'user_session',
	}),
	env: dev ? 'DEV' : 'PROD',
	middleware: sveltekit(),
	getUserAttributes: (data) => {
		return {
			githubUsername: data.username,
		};
	},
});
export const githubAuth = github(auth, {
	clientId: GITHUB_CLIENT_ID,
	clientSecret: GITHUB_CLIENT_SECRET,
});
export type Auth = typeof auth;
