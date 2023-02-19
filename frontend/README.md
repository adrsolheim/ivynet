frontend: svelte, sveltekit & typescript
```
npm create vite@latest frontend -- --template svelte-ts
npm install --save-dev @tsconfig/svelte typescript svelte-preprocess svelte-check
npm install @rollup/plugin-typescript --save-dev
npm install @supabase/supabase-js
npm install @sveltejs/kit @sveltejs/adapter-auto --save-dev
npm install @supabase/auth-helpers-sveltekit --save-dev
```
frontend: testing (svelte & sveltekit)
```
npm install --save-dev vitest jsdom
npm install --save-dev vitest-svelte-kit
npm install --save-dev @testing-library/svelte jest-dom jsdom
npm install --save-dev @testing-library/jest-dom
```
run
```
sudo docker run --network host -d svelte-frontend
```
### `frontend/`
```
docker build -t svelte-frontend .
docker run --network host -d svelte-frontend
docker stop "$(docker ps | grep svelte-frontend | cut -d " " -f 1)"
```
