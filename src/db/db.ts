import { env } from '$env/dynamic/private';
import { LIBSQL_AUTH } from '$env/static/private';
import { createClient } from '@libsql/client';
import { drizzle } from 'drizzle-orm/libsql';
import * as schema from './schema';
const client = import.meta.env.PROD
	? createClient({ url: env.LIBSQL_URL, authToken: LIBSQL_AUTH })
	: createClient({ url: 'http://127.0.0.1:8080' });

export const db = drizzle(client, { schema });
