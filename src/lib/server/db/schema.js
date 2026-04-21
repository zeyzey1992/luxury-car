import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core';

export const task = sqliteTable('task', {
	id: text('id').primaryKey().$defaultFn(() => crypto.randomUUID()),
	title: text('title').notNull(),
	priority: integer('priority').notNull().default(1)
});
export const bookings = sqliteTable('bookings', {
	id: text('id').primaryKey().$defaultFn(() => crypto.randomUUID()),
	userId: text('user_id').notNull(),
	carId: integer('car_id').notNull(),
	carName: text('car_name').notNull(),
	carImage: text('car_image').notNull(),
	carColor: text('car_color').notNull(),
	startDate: text('start_date').notNull(),
	endDate: text('end_date').notNull(),
	days: integer('days').notNull(),
	totalPrice: integer('total_price').notNull(),
	createdAt: integer('created_at', { mode: 'timestamp' }).$defaultFn(() => new Date())
});

export *  from './auth.schema';
