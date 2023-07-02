import type { MovieDetails, MovieList } from '../lib/types.js';
import * as api from '$lib/api';

export async function load({ fetch }) {
    const [trending, now_playing, upcoming] = await Promise.all([
        api.get(fetch, 'trending/movie/day', { page: '1' }) as Promise<MovieList>,
        api.get(fetch, 'movie/now_playing', { page: '1' }) as Promise<MovieList>,
        api.get(fetch, 'movie/upcoming', { page: '1' }) as Promise<MovieList>,
    ])

    const featured = (await api.get(fetch, `movie/${trending.results[0].id}`, {
        append_to_response: 'images,videos,recommendations'
    })) as MovieDetails;

    return {
        trending,
        now_playing,
        upcoming,
        featured
    }
}