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
            <li><a href="/{nav.toLowerCase().replace(/ /g,'')}">{nav}</a></li>
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
    a{
        padding: 8px;
        color: white;
        text-decoration: none;
    }
</style>