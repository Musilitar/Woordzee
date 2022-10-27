<script lang="ts">
    import Message from './lib/Message.svelte'

    const persistMessage = (event) => {
        console.log(`Updated message: ${event.detail.message}`)
    }
</script>

<main>
    <Message on:update={persistMessage} />
</main>

<style>
    main {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        background: linear-gradient(0deg, var(--pink) 0%, var(--yellow) 100%);
    }
</style>
