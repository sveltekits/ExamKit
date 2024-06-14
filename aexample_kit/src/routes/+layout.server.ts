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

    const data = { page: "+layout.server.ts", status: "ok" };

    return { data };
};
