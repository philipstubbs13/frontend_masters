<script lang="ts">
	import Carousel from "$lib/components/Carousel.svelte";
import Hero from "./Hero.svelte";

    export let data;
</script>

<Hero movie={data.movie} />

<div class="column grid">
    {#if data.trailer}
        <iframe
            src="https://www.youtube.com/embed/{data.trailer.key}"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
        />
    {/if}

    <dl>
        <dt>Released</dt>
        <dd>{data.movie.release_date}</dd>

        <dt>Runtime</dt>
        <dd>{data.movie.runtime} minutes</dd>

        <dt>Budget</dt>
        <dd>${Math.round(data.movie.budget / 1e6)}M</dd>

        <dt>Revenue</dt>
        <dd>${Math.round(data.movie.revenue / 1e6)}M</dd>

        <dt>Genre</dt>
        <dd>{data.movie.genres.map((g) => g.name).join(', ')}</dd>
    </dl>
</div>

{#if data.movie.recommendations.results.length > 0}
    <Carousel
        view={{ title: 'You might also like', endpoint: '' }}
        movies={data.movie.recommendations.results}
        href={null}
    />
{/if}

<style>
    .grid {
        display: grid;
        margin: 2em 0;
        gap: 2em;
    }

    iframe {
        aspect-ratio: 16 / 9;
        width: 100%;
    }

    dl {
        display: grid;
        grid-template-columns: max-content 1fr;
        gap: 1em;
    }

    dt {
        text-transform: uppercase;
        font-size: 0.8rem;
        opacity: 0.8;
        top: 0.2em;
    }

    dd {
        margin: 0;
    }

    @media (min-width: 40em) {
        .grid {
            grid-template-columns: 1fr 1fr;
        }

        dl {
            height: 0;
        }
    }
</style>