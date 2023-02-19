<script lang="ts">
    import CardList from "$lib/cardlist.svelte";
    import BeerIcon from "$lib/assets/beermug3.svg";
    import BatchCard from "$lib/card.svelte";
    import { batchStore } from "./data";
    import { setContext } from "svelte";

    $batchStore.forEach(element => {
        setContext(element._id, element);
    });
</script>

<div>
    <div class="title">
        <h1>Batches</h1>
    </div>
    <CardList>
    {#each $batchStore as brew (brew._id)}
        <BatchCard brewid={brew._id}>
            <img src={BeerIcon} alt="A beer mug."/>
            <h2><a href='brews/{brew._id}'>{brew.recipe.name}</a></h2>
        </BatchCard>
    {:else}
        <h2>No brews available</h2>
    {/each}
    </CardList>
</div>


<style>
    a{
        text-decoration: none;
        color: #CCA049;
    }
    h1{
        padding-bottom: 50px;
        display: inline-block;
    }
    img{
        max-width: 200px;
        max-height: 200px;
        padding-left: 30px;
    }
</style>