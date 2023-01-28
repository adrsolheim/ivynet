<script lang="ts">
    import Header from '$lib/header.svelte';
    import '../styles/global.css';
</script>

<header>
    <Header />
</header>

<main>
    <!-- Page Content -->
    <slot></slot>
</main>

<footer>
    Copyright 2023 Adrsolheim
</footer>

<style>
    header{
        display: flex;
        justify-content: center;
        background-color: #18181A;
    }
    main{
        max-width: 960px;
        margin: 20px auto;
    }
    footer{
        text-align: center;
    }
</style>