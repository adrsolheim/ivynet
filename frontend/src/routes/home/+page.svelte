<script lang="ts">
  //import { supabaseClient } from '$lib/db';
  //import logo from '$lib/assets/eldon.png';
  import actionsLogo from '$lib/assets/actions.png';
  import jestLogo from '$lib/assets/jest.png';
  import supabaseLogo from '$lib/assets/supabase.png';
  import svelteLogo from '$lib/assets/svelte.png';
  import typescriptLogo from '$lib/assets/typescript.png';
  import viteLogo from '$lib/assets/vite.png';
  import vitestLogo from '$lib/assets/vitest.svg';
  import vercelLogo from '$lib/assets/vercel.svg';
  import { crossfade } from 'svelte/transition';
  import { flip } from 'svelte/animate';
  import { quintOut } from 'svelte/easing';
  
  let leftLogos: [string,string][] = [
    ["Github Actions",actionsLogo],
    ["Jest",jestLogo],
    ["Supabase",supabaseLogo],
    ["SvelteKit",svelteLogo]
  ];
  let rightLogos: [string,string][] = [
    ["TypeScript",typescriptLogo],
    ["Vite",viteLogo],
    ["Vitest",vitestLogo],
    ["Vercel",vercelLogo]
  ];

  const [send, receive] = crossfade({
  duration: d => Math.sqrt(d * 200),

  fallback(node, params) {
    const style = getComputedStyle(node);
    const transform = style.transform === 'none' ? '' : style.transform;

    return {
      duration: 600,
      easing: quintOut,
      css: t => `
        transform: ${transform} scale(${t});
        opacity: ${t}
      `
    };
  }
	});
  

  const moveToLeft = (clickedLogo: [string,string]) => {
    remove("right",clickedLogo);
    add("left",clickedLogo);
  }
  const moveToRight = (clickedLogo: [string,string]) => {
    remove("left",clickedLogo);
    add("right",clickedLogo);
  }
  const remove = (side: string, clickedLogo: [string,string]) => {
    if (side === "left"){
      leftLogos = [...leftLogos.filter(logo => logo !== clickedLogo)];
    } else {
      rightLogos = [...rightLogos.filter(logo => logo !== clickedLogo)];
    }
  }
  const add = (side: string, clickedLogo: [string,string]) => {
    if (side === "left") {
      leftLogos = [...leftLogos, clickedLogo];
    } else {
      rightLogos = [...rightLogos, clickedLogo];
    }
  }
  
</script>


<div class="content">
  <h4>Website</h4>
  <p>
    A personal project designed to experiment with and explore new frameworks and tools.
    New changes are reflected rapidly through a CI/CD pipeline that automatically deploy new changes to production.
    
  </p>
</div>

<div class="stack">
  <h1>Stack</h1>
  <div class="gridded float-left">
    {#each leftLogos as logo (logo[0])}
      <div 
        class="item" 
        animate:flip="{{duration: 300}}"
        in:receive="{{key: logo[0]}}"
        out:send="{{key: logo[0]}}"
        on:click={() => moveToRight(logo)}
        >
        <img src={logo[1]}/>
        <p>{logo[0]}</p>
      </div>
    {/each}
  </div>
  <div class="gridded float-right">
    {#each rightLogos as logo (logo[0])}
      <div 
        class="item" 
        animate:flip="{{duration: 300}}"
        in:receive="{{key: logo[0]}}"
        out:send="{{key: logo[0]}}"
        on:click={() => moveToLeft(logo)}
        >
        <img src={logo[1]}/>
        <p>{logo[0]}</p>
      </div>
    {/each}
  </div>


</div>

<style>
    div {
      font-family: Verdana, Geneva, Tahoma, sans-serif;
    }
    
    .content {
      font-size: large;
      background-color: #262626;
      background: -moz-linear-gradient(left, rgba(38,38,38,1) 90%, rgba(34,34,34,1) 100%); /* FF3.6+ */
      background: -webkit-linear-gradient(left, rgba(38,38,38,1) 90%, rgba(34,34,34,1) 100%); /* FF3.6+ */
      text-align: left;
      float: left;
      padding: 16px;
      margin-bottom: 100px;
      border-left: solid grey;
    }
    h1 {
      padding: 30px;
    }
    img {
      height: 150px;
    }
    .item:hover {
      cursor: pointer;
    }
    .float-left {
      width: 50%;
      float: left;
    }
    .float-right {
      width: 50%;
      float: right;
    }
    .gridded{
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-auto-rows: auto;
      grid-gap: 1rem;
    }
</style>