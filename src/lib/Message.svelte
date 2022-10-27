<script lang="ts">
    import { createEventDispatcher } from 'svelte'

    export let message = ''
    let timer: number
    const dispatch = createEventDispatcher()

    const dispatchUpdate = () => {
        clearTimeout(timer)
        timer = setTimeout(() => {
            dispatch('update', { message })
        }, 2500)
    }
</script>

<textarea bind:value={message} on:keyup={dispatchUpdate} />

<style>
    textarea {
        width: 75%;
        min-height: 50px;
    }
</style>
