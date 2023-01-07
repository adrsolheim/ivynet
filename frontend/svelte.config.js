import { vitePreprocess } from '@sveltejs/vite-plugin-svelte'
import preprocess from 'svelte-preprocess';

// vite-plugin-svelte will complain if this file doesn't remain a '.js' file
export default {
  // Consult https://svelte.dev/docs#compile-time-svelte-preprocess
  // for more information about preprocessors
  // preprocess: vitePreprocess(),
  preprocess: preprocess(),
}
