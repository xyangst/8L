import { dev } from '$app/environment';
import { LIBSQL_AUTH, LIBSQL_URL } from '$env/static/private';
import { createClient } from '@libsql/client';
import { drizzle } from 'drizzle-orm/libsql';
import * as schema from './schema';

export const client = !dev
	? createClient({ url: LIBSQL_URL, authToken: LIBSQL_AUTH })
	: createClient({ url: 'http://127.0.0.1:8080' });

export const db = drizzle(client, { schema });
