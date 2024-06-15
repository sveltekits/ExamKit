// import { prisma } from '$lib/db/prisma';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async (event) => {
    // const posts = await prisma.post.findMany({
    // 	select: {
    // 		title: true,
    // 		slug: true
    // 	},
    // 	take: 4
    // });

    // let user: Tuser;

    // try {
    //     if (!locals.user) {
    //         console.log('Access Not Denied :: USER');
    //         user = {
    //             id: '00000',
    //             name: 'guest',
    //             region: '00000'
    //         };
    //         // throw redirect(303, '/');
    //     } else {
    //         user = {
    //             id: locals.user.id,
    //             name: locals.user.name,
    //             region: locals.user.region
    //         };
    //     }

    // } catch (e) {
    //     throw error(404, (e as Error).message);
    // }

    const data = { page: "+layout.server.ts", status: "ok" };

    return { data };
};
