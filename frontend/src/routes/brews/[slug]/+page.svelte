<script lang="ts">
    import { error } from '@sveltejs/kit';
    import type { PageLoad } from './$types';
    import { batchStore } from '../data';
    import type { Batch } from "../batch";
    import { getContext } from 'svelte';
    import { page } from '$app/stores';

    const batch: Batch = $batchStore.find(elem => elem._id === $page.params.slug)
</script>
{#if batch}
    <div>
        <p>Recipe {batch.recipe.name}</p>
        <p>Batch No. {batch.batchNo}</p>
        <p>Brewdate {new Date(batch.brewDate).toDateString()}</p>
        <p>Status: {batch.status}</p>
        {#if batch.brewer}
            <p>Brewed by {batch.brewer}</p>
        {/if}
    </div>
{:else}
    <p>Could not find batch</p>
{/if}