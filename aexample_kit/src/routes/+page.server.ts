import type { PageServerLoad } from './$types';

// +page.ts ----> PageLoad
// +page.server.ts ======> PageServerLoad

export const load: PageServerLoad = async (event) => {
    const data = { page: "+page.server.ts", status: "ok" };

    return { data };
}