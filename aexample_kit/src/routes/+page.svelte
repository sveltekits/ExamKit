<script lang="ts">
    import type { PageServerData } from './$types';
    export let data: PageServerData;

    const { page, status } = data;

    console.log("main PageServerData :: ", page, status);
</script>

<h1>Welcome to SvelteKit</h1>