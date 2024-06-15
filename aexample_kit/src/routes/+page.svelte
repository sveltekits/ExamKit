<script lang="ts">
    import type { PageServerData } from './$types';
    export let data: PageServerData;

    const { page, status } = data;

    console.log("PageServerData :: ", page, status);
</script>

<h1>Welcome to SvelteKit</h1>
{#await data}
    <p>Loading......</p>
{:then value}
    <p>{JSON.stringify(data)}</p>
    <!-- {"Data":{"Page":"+Layout.Server.Ts","Status":"Ok"},"Page":"+Page.Server.Ts","Status":"Ok"} -->
{:catch error}
    <p>Error loading.... {error}</p>
{/await}