<script lang="ts">
    import { goto } from '$app/navigation';
    
    export let brewid: string;


</script>

<div class="card" on:click={() => goto(`brews/${brewid}`)}>
    <div class="content">
        <slot></slot>
    </div>
</div>


<style>
    .card{
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
        transition: 0.15s;
        height: 300px;
        width: 250px;
        padding: 25px;
        transition: transform 0.4s;
    }
    .card:hover{
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
        cursor: pointer;
        background-color: #262626;
        transform: scale(1.05)

    }
    .content{
        padding: 2px 16px;
    }
</style>