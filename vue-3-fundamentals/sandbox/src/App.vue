<script setup>
import BaseCounter from "./components/BaseCounter.vue"
import UserCard from "./components/user-card.vue"
</script>

<template>
  <BaseCounter />
  <UserCard :user="{ name: 'ben', food: 'Ramen' }" />
</template>

<style>
</style>