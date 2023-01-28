<script lang="ts">
    import { batchStore } from "./data";
    import { onMount, setContext } from "svelte";
    import type { Batch } from "./batch";
    let _batches: Batch[] = [];
    const moreClick = (id: string) => {
        let findIdx = (element: Batch) => element._id === id;
        let idx = _batches.findIndex(findIdx);
        _batches[idx].more = true
    }
    const deleteClick = (id: string) => {
        _batches = _batches.filter(b => b._id != id)
    }
</script>

<div>
    <h1>Brews</h1>
    {#each $batchStore as brew (brew._id)}
        <h2><a href='brews/{brew._id}'>{brew.recipe.name}</a></h2> 
        {#if brew.more}
            <p><strong>{brew.status}</strong></p>
        {/if}
        <button on:click={() => {moreClick(brew._id)}}>More</button>
        <button on:click={() => {deleteClick(brew._id)}}>Delete</button>
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