<script lang="ts">
    import { error } from '@sveltejs/kit';
    import type { PageLoad } from './$types';
    import { batchStore } from '../data';
    import type { Batch } from "../batch";
    import { getContext } from 'svelte';
    import { page } from '$app/stores';

    const batch: Batch = getContext($page.params.slug);
/*     export const load = (({ params }) => {
        console.log(params.slug)
        let b = $batchStore.find(elem => params.slug == elem._id)
        if (b) {
            batch = b;
        } else {
            throw error(404, 'Not found');
        }
    }) satisfies PageLoad; */
</script>
{#if batch}
    <div>
        <p>Name {batch.name}</p>
        <p>Recipe {batch.recipe}</p>
        <p>Batch No. {batch.batchNo}</p>
        <p>Brewdate {batch.brewDate}</p>
        <p>Stats {batch.status}</p>
        <p>Brewed by {batch.brewer}</p>
    </div>
{:else}
    <p>No info on batch</p>
{/if}