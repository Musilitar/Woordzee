<script lang="ts">
    import type { Scribble } from '../stores'

    export let scribble: Scribble = { id: 0, text: '', state: 0 }
    let text: string
    let timer: number

    const persist = () => {
        clearTimeout(timer)
        timer = setTimeout(() => {
            console.log('Should persist now')
        }, 2500)
    }
</script>

<textarea value={scribble.text} on:input={(event) => (text = event.currentTarget.value)} on:keyup={persist} />

<style>
    textarea {
        width: 75%;
        min-height: 50px;
    }
</style>
