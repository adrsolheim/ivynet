<script lang="ts">
    import { supabase } from "../supabaseClient";
    import { FunctionsHttpError, FunctionsRelayError, FunctionsFetchError } from "@supabase/supabase-js"
    import { onMount } from "svelte";

    let batches = [];
    const moreClick = (id: string) => {
        let findIdx = (element) => element._id === id;
        let idx = batches.findIndex(findIdx);
        batches[idx].more = true
        //console.log(`More info for batch #${idx}`)
        //expand info
    }
    const deleteClick = (id: string) => {
        batches = batches.filter(b => b._id != id)
    }
    onMount(async () => {
        const { data, error } = await supabase.functions.invoke('bf-api')
        if (error instanceof FunctionsHttpError) {
            console.log('Function returned an error', error.message)
        } else if (error instanceof FunctionsRelayError) {
            console.log('Relay error:', error.message)
        } else if (error instanceof FunctionsFetchError) {
            console.log('Fetch error:', error.message)
        } else {
            batches = data
        }

    })
</script>

<div>
    <h1>Brews</h1>
    {#each batches as brew (brew._id)}
        <h2>{brew.recipe.name}</h2> 
        {#if brew.more}
            <p><strong>{brew.status}</strong></p>
        {/if}
        <button on:click={() => {moreClick(brew._id)}}>More</button>
        <button on:click={() => {deleteClick(brew._id)}}>Delete</button>
    {:else}
        <h2>No brews available</h2>
    {/each}
</div>