<script setup>
  // go to /pokedex/1

</script>

<template>
  <h1>Pokedex</h1>
  <router-link to="/pokedex/20">Go to Pokemon #20</router-link>
</template>

<!-- <script setup>
// https://pokeapi.co/api/v2/pokemon?limit=151
import BaseButton from "../components/base-button.vue"
import { computed, defineProps, defineEmits, ref, reactive, onBeforeUnmount } from 'vue'

const emits = defineEmits(['change-region'])

const props = defineProps({
  region: {
    type: String,
  }
})

const regionName = ref("Kanto");

const state = reactive({
    elementType: 'lightning'
})

const elementTypeAllCaps = computed
(() => {
    return state.elementType.toUpperCase() + props.region;
})

const pokedex = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
    .then(response => response.json())

const changeRegionName = () => {
  regionName.value = 'Hoenn'
}

onBeforeUnmount(() => {
  console.log('Do this thing!')
})
</script>

<template>
    <h2>{{  regionName }}</h2>
    <BaseButton />
    <h3> {{  elementTypeAllCaps }}</h3>
    <button @click="changeRegionName">Change Region Name</button>
    <pre>{{  pokedex  }}</pre>
</template> -->