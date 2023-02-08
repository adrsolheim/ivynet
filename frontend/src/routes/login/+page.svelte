<script lang="ts">
  import { supabaseClient } from "$lib/db";

  let loading = false;
  let resetLoading = false;
  let userEmail = "";
  let userPassword = "";

  const handleLogin = async () => {
    try {
      loading = true;
      const { error } = await supabaseClient.auth.signInWithPassword({ email: userEmail, password: userPassword });
      if (error) throw error;
      //alert('Check your email for login link!')
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message)
      }
    } finally {
      loading = false
    }
  }
</script>


<div class="row flex-center flex">
  <div class="col-6 form-widget" aria-live="polite">
    <h1 class="header">Login</h1>
    <form class="form-widget" on:submit|preventDefault="{handleLogin}">
      <div>
        <label for="email">Email</label>
        <input
          id="email"
          class="inputField"
          type="email"
          placeholder="Your email"
          bind:value="{userEmail}"
        />
        <label for="password">Password</label>
        <input
          id="password"
          class="inputField"
          type="password"
          placeholder="Your password"
          bind:value="{userPassword}"
        />
      </div>
      <div>
        <button type="submit" class="button block" aria-live="polite" disabled="{loading}">
          <span>{loading ? 'Loading' : 'Login'}</span>
        </button>
        <button type="submit" class="button block" aria-live="polite" disabled="{resetLoading}">
          <span>{resetLoading ? 'Loading' : 'Reset password'}</span>
        </button>
      </div>
    </form>
  </div>
</div>