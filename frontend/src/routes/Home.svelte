<script lang="ts">
  import { supabase } from '../supabaseClient'
  import logo from '../assets/eldon.png'

  let loading = false
</script>

<div class="row flex-center flex">
  <div class="col-6 form-widget" aria-live="polite">
    <h1 class="header">Home</h1>
    <img src={logo} alt="Eldon logo" />
    <p class="description">Welcome</p>
      <div>
        <button type="submit" class="button block" aria-live="polite" disabled="{loading}">
          <span>{loading ? 'Loading' : 'Clicky-click'}</span>
        </button>
      </div>
  </div>
</div>