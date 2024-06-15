<script lang="ts">
	import '../app.css';
    import type { LayoutServerData } from './$types';

    export let data: LayoutServerData;
    const { page, status } = data.data;

    console.log("LayoutServerData :: ", page, status);

</script>

<div class="layoutContainer">
    <slot />
</div>