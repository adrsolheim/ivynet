<div class="cards">
    <slot></slot>
</div>

<style>
    .cards{
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-auto-rows: auto;
        grid-gap: 1rem;
    }
</style>