<script lang="ts">
    const navbar = ["Home", "Brews", "Login", "Sign Up"];
  
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
        float: none;
        align-content: center;
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