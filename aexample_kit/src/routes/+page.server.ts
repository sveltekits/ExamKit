import { error, redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

// +page.ts ----> PageLoad
// +page.server.ts ======> PageServerLoad

export const load = (async (loadServerEvent) => {
    // const { fetch, params } = loadServerEvent;
    // const { productId } = params;

    const data = { page: "+page.server.ts", status: "ok" };

    try {
        // const response = await fetch(`https://dummyjson.com/products/${productId}`);
        // const data = await response.json();

        // return data;
    } catch (e) {
        throw error(404, (e as Error).message);
    }

    return data;
}) satisfies PageServerLoad;