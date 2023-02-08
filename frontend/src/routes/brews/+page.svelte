<script lang="ts">
    import { batchStore } from "./data";
    import { onMount, setContext } from "svelte";
    import type { Batch } from "./batch";
    let _batches: Batch[] = [];
</script>

<div>
    <h1>Brews</h1>
    {#each $batchStore as brew (brew._id)}
        <h2><a href='brews/{brew._id}'>{brew.recipe.name}</a></h2> 
        {#if brew.more}
            <p><strong>{brew.status}</strong></p>
        {/if}
    {:else}
        <h2>No brews available</h2>
    {/each}
</div>


<style>
    a{
        text-decoration: none;
        color: grey;
    }
</style>