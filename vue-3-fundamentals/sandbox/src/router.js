import PokedexPage from './views/PokedexPage.vue';
import HomePage from './views/HomePage.vue';

export const routes = [
    {
        path: '/',
        component: HomePage
    },
    {
        path: '/pokedex',
        component: PokedexPage
    },
    {
        path: '/pokedex/:id',
        component: () => import("@/views/PokemonPage.vue")
    }
]