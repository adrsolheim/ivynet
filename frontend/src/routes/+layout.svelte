<script lang="ts">
    import { page } from '$app/stores';
    import Header from '$lib/header.svelte';
    import '../styles/global.css';
    import { supabaseClient } from '$lib/db';
    import { invalidate } from '$app/navigation';
    import { onMount } from 'svelte';

    // Every PageLoad or LayoutLoad using getSupabase() 
    // will update when invalidate('supabase:auth') is called.
    onMount(() => {
        const {
            data: { subscription }, 
        } = supabaseClient.auth.onAuthStateChange(() => {
            invalidate('supabase:auth')
        })
        return () => {
            subscription.unsubscribe()
        }
    })
</script>

<header>
    <Header />
</header>
<main>
    <!-- Page Content -->
    <slot></slot>
</main>

<footer>
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
        position: fixed;
        bottom: 0;
        width: 100%;
        text-align: center;
    }
</style>