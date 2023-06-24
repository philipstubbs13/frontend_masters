<script lang="ts">
	import { receive } from "./transitions";
	import { get_twemoji_url } from "./utils";

    export let found: string[];
</script>

<div class="found">
    {#each found as emoji (emoji)}
        <div class="pair">
            <span in:receive={{ key: `${emoji}:a` }}>{emoji}</span>
            <span in:receive={{ key: `${emoji}:b` }}>{emoji}</span>
            <!-- <img alt={emoji} src={get_twemoji_url(emoji)} /> -->
        </div>
    {/each}
</div>

<style>
    .found {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 0.5em;
        height: 100%;
        filter: drop-shadow(0.2em 0.2em 0.5em rgba(0, 0, 0, 0.2));
    }

    span {
        position: absolute;
        width: 2em;
        height: 2em;
        font-size: 4em;
    }

    .pair {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 4em;
        height: 4em;
        background: white;
        padding: 1em;
        border-radius: 50%;
    }

    /* img {
        position: absolute;
        width: 2em;
        height: 2em;
    } */
</style>