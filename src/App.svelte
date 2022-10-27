<script lang="ts">
    import Scribble from './lib/Scribble.svelte'
    import { scribbles } from './stores'

    const startScribble = () => {
        $scribbles = [...$scribbles, { id: 0, text: 'New scribble', state: 0 }]
    }
</script>

<main>
    <button on:click={startScribble}>New</button>
    {#each $scribbles as scribble}
        <Scribble {scribble} />
    {/each}
</main>

<style>
    main {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        background: linear-gradient(0deg, var(--pink) 0%, var(--yellow) 100%);
    }
</style>
