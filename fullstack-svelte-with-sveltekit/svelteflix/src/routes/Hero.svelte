<script lang="ts">
	import type { MovieDetails } from "../lib/types";
	import { media } from "../lib/api";

    export let movie: MovieDetails

    $: images = movie.images;
    $: backdrop = images.backdrops.find((image) => !image.iso_639_1) || images.backdrops[0];
    $: logo = images.logos.find((image) => image.iso_639_1 === 'en') || images.backdrops[0];
</script>

<a href="/movie/{movie.id}" class="column">
    <img
        class="backdrop"
        alt={movie.title}
        src={media(backdrop.file_path, 1280)}
        style="aspect-ratio: {backdrop.aspect_ratio}"
    />

    <img
        class="logo"
        alt={movie.title}
        src={media(logo.file_path, 1280)}
        style="aspect-ratio: {logo.aspect_ratio}"
    />
</a>

<style>
    a {
        display: flex;
    }

    .backdrop {
        width: 100%;
    }

    .logo {
        position: absolute;
        left: 0;
        top: 0;
        height: 100%;
        width: 30%;
        object-fit: contain;
        filter: drop-shadow(0 0 1rem black);
    }
</style>