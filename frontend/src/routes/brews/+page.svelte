<script lang="ts">
    import { batchStore } from "./data";
    import { onMount, setContext } from "svelte";
    import type { Batch } from "./batch";
    import { P } from "vitest/dist/types-bae746aa";
    let _batches: Batch[] = [];

    $batchStore.forEach(element => {
        setContext(element._id, {
            getBatch: () => element
        });
    });
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
    h2{
        transition: transform 0.4s;
    }
    h2:hover{
        transform: scale(1.5)
    }
</style>