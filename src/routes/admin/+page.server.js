import { db } from '$lib/server/db/index.js';
import { bookings } from '$lib/server/db/schema.js';
import { user } from '$lib/server/db/auth.schema.js';
import { redirect } from '@sveltejs/kit';

//if user log in as admin it displays otherwise send the home page
export const load = async ({ locals }) => {
    if (!locals.user || locals.user.role !== 'ROLE_ADMIN') {
        throw redirect(302, '/');
    }
    
    
    const allUsers = await db.select().from(user);
    
    
    return {
        users: allUsers,
    };
};