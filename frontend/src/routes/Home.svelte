<script lang="ts">
  import { supabase } from '../supabaseClient'

  let loading = false
</script>

<div class="row flex-center flex">
  <div class="col-6 form-widget" aria-live="polite">
    <h1 class="header">Home</h1>
    <p class="description">Welcome</p>
      <div>
        <button type="submit" class="button block" aria-live="polite" disabled="{loading}">
          <span>{loading ? 'Loading' : 'Clicky-click'}</span>
        </button>
      </div>
  </div>
</div>