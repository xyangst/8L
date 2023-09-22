import { createClient } from '@libsql/client';
import { drizzle } from 'drizzle-orm/libsql';
import * as schema from './schema';
export const client =
	process.env.MODE == 'PROD'
		? createClient({ url: process.env.LIBSQL_URL!, authToken: process.env.LIBSQL_AUTH! })
		: createClient({ url: 'http://127.0.0.1:8080' });

export const db = drizzle(client, { schema });
