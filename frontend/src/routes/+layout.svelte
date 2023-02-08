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
{#if !$page.data.session}
<h1>Not logged in</h1>
{:else}
<h1>Welcome {$page.data.session.user.email}</h1>
{/if}
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