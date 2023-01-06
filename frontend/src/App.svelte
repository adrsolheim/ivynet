<script lang="ts">
  import svelteLogo from './assets/svelte.svg';
  import { onMount } from 'svelte'
  import { supabase } from './supabaseClient'
  import type { AuthSession } from '@supabase/supabase-js'
  import Account from './routes/Account.svelte'
  import Login from './routes/Login.svelte'
  import Home from './routes/Home.svelte'

  let session: AuthSession

  onMount(() => {
    supabase.auth.getSession().then(({ data }) => {
      session = data.session
    })

    supabase.auth.onAuthStateChange((_event, _session) => {
      session = _session
    })
  })
</script>

<div>
  <a href="https://vitejs.dev" target="_blank" rel="noreferrer"> 
    <img src="/vite.svg" class="logo" alt="Vite Logo" />
  </a>
  <a href="https://svelte.dev" target="_blank" rel="noreferrer"> 
    <img src={svelteLogo} class="logo svelte" alt="Svelte Logo" />
  </a>
</div>

<div class="container" style="padding: 50px 0 100px 0">
  {#if !session}
  <Home />
  {:else}
  <Account {session} />
  {/if}
</div>


<style>
  .logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
  }
  .logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
  .logo.svelte:hover {
    filter: drop-shadow(0 0 2em #ff3e00aa);
  }
</style>