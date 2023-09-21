import { migrate } from 'drizzle-orm/libsql/migrator';
import { db } from './db';
export function applyMigrations() {
	migrate(db, { migrationsFolder: './drizzle' });
	console.log('migrated');
}
