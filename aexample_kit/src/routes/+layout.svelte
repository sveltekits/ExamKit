<script lang="ts">
    import type { LayoutServerData } from './$types';

    export let data: LayoutServerData;

    console.log("LayoutServerData :: " + JSON.stringify(data));

</script>

<div>
    <slot />
</div>