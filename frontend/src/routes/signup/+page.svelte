<script lang="ts">
    import { supabase } from "../../supabaseClient";

    let userEmail = ""; 
    let userPassword = "";
    let loading = false;

    const handleSignup = async () => {
        try {
            loading = true;
            const { data, error } = await supabase.auth.signUp({
                email: userEmail,
                password: userPassword,
            })
            if (error) throw error;
        } catch (error) {
            if (error instanceof Error) {
                alert(error.message)
            } 
        } finally {
            loading = false;
        }
    }
</script>

<div class="row flex-center flex">
  <div class="col-6 form-widget" aria-live="polite">
    <h1 class="header">Sign Up</h1>
    <form class="form-widget" on:submit|preventDefault="{handleSignup}">
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
          <span>{loading ? 'Loading' : 'Sign Up'}</span>
        </button>
      </div>
    </form>
  </div>
</div>