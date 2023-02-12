<script lang="ts">
    import { page } from '$app/stores';
    const regular = ["Home", "Brews", "Login", "Sign Up"];
    const authenticated = ["Home", "Brews", "Login", "Sign Up", "Account"];
    let navbar = regular;
    $: if($page.data.session) {
        navbar = authenticated;
    } else {
        navbar = regular;
    }
</script>
<div>
    <ul>
        {#each navbar as nav}
            <li><div class="zoom line"><a href="/{nav.toLowerCase().replace(/ /g,'')}">{nav}</a></div></li>
        {/each}
    </ul>
</div>


<style>
    ul{
        list-style-type: none;
        align-content: center;
        float: none;
    }
    li{
        display: inline;
    }
    
    .line{
        display: inline-block;
    }
    .zoom a:hover{
        transform: scale(1.2);
        transition: all ease .4s;
        color: #C7D3D6;
        box-shadow: 0px 0px 16px 2px rgba(255, 255, 255, 0.05);
        background-color: rgba(255,255,255,0.02);
        border-radius: 25px;
    }
    a{
        display: block;
        padding: 8px;
        color: white;
        text-decoration: none;
    }
</style>