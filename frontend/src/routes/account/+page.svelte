<script lang="ts">
    import { page } from '$app/stores';
    import { onMount } from "svelte";
    import type { AuthSession } from "@supabase/supabase-js";
    import { supabaseClient } from "$lib/db";
  
    let session: AuthSession = $page.data.session;
  
    let loading = false;
    let edit = false;
    let username: string | null = null;
    let website: string | null = null;
    let avatarUrl: string | null = null;
  
    onMount(() => {
      getProfile()
    })
  
    const getProfile = async () => {
      try {
        loading = true
        const { user } = session
  
        const { data, error, status } = await supabaseClient
          .from('profiles')
          .select('username, website, avatar_url')
          .eq('id', user.id)
          .single()
  
        if (error && status !== 406) throw error
  
        if (data) {
          username = data.username
          website = data.website
          avatarUrl = data.avatar_url
        }
      } catch (error) {
        if (error instanceof Error) {
          alert(error.message)
        }
      } finally {
        loading = false
      }
    }
  
    const updateProfile = async () => {
      try {
        loading = true
        const { user } = session
  
        const updates = {
          id: user.id,
          username,
          website,
          avatar_url: avatarUrl,
          updated_at: new Date().toISOString(),
        }
  
        let { error } = await supabaseClient.from('profiles').upsert(updates)
  
        if (error) {
          throw error
        }
      } catch (error) {
        if (error instanceof Error) {
          alert(error.message)
        }
      } finally {
        loading = false;
        edit = false;
      }
    }
  </script>
  
  <form on:submit|preventDefault={updateProfile} class="form-widget card">
    <div>Email: {session.user.email}</div>
    {#if !edit}
      <div>Username: {username}</div>
      <div>Website: {website}</div>
      <button type="submit" on:click={()=>edit=true} class="button primary block" disabled={loading}>
        {loading ? 'Saving ...' : 'Edit profile'}
      </button>
    {:else}
      <div>
        <label for="username">Name</label>
        <input id="username" type="text" bind:value={username} />
      </div>
      <div>
        <label for="website">Website</label>
        <input id="website" type="text" bind:value={website} />
      </div>
      <div>
        <button type="submit" class="button primary block" disabled={loading}>
          {loading ? 'Saving ...' : 'Update profile'}
        </button>
        <button type="submit" on:click={()=>edit=false} class="button primary block" disabled={loading}>
          {loading ? 'Saving ...' : 'Cancel'}
        </button>
      </div>
    {/if}
    <button type="button" class="button block" on:click={() => supabaseClient.auth.signOut()}>
      Sign Out
    </button>
  </form>

  <style>
    div{
      margin: 15px;
    }
    form.card{
      box-shadow: 0px 0px 20px 2px rgba(255, 255, 255, 0.2);
      display: inline-block;
      padding: 20px;
      align-content: center;
      font-size: 20px;
    }
    button{
      font-size: 15px;
      color: white;
      padding: 5px;
      background-color: #444C59;
      border: none;
      margin: 10px 10px 0px 10px;
      margin-left: 10px;
      margin-right: 10px;
    }
    button:hover{
      background-color: #909090;
    }
  </style>