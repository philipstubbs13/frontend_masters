<script>
import { newCount } from "../composables/countStore"

export default {
    setup() {
        return {
            newCount
        }
    },
    props: {
        user: {
            type: Object,
            required: true
        }
    },
    emits: ['change-name']
}
</script>

<template>
    <h1>User: {{  user.name  }}</h1>
    <h2>New Count: {{ newCount }}</h2>
    <p>Favorite Food: {{ user.food }}</p>
    <button @click="$emit('change-name')">Change Name</button>
</template>