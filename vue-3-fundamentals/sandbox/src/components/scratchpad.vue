<script>
import BaseCounter from './components/BaseCounter.vue'
import UserCard from './components/user-card.vue'
import BaseButton from './components/base-button.vue';
import BaseLayout from './components/base-layout.vue';

export default {
  components: {
    BaseLayout,
    BaseButton,
    BaseCounter,
    UserCard
  },
  data() {
    return {
      message: 'Hello it works',
      listOfNumbers: [1, 2, 3, 4, 5],
      userData: {
        name: 'Ben',
        preferredFramework: 'vue',
        favoriteFood: 'sushi',
        favoriteNumbers: [8, 10, 12],
      }
    }
  },
  computed: {
    refinedUserData() {
      return {
        name: this.userData.name,
        food: this.userData.favoriteFood
      }
    }
  },
  methods: {
    changeName() {
      this.userData.name = 'Charlie'
    }
  }
}
</script>

<template>
  <BaseLayout>
    <template #sidebar>
        Aside
    </template>
    <template #main>
      <UserCard :user="refinedUserData" @change-name="changeName" />
    </template>
    <template #footer>
      <BaseCounter />
    </template>
  </BaseLayout>
  <BaseButton :left="true"></BaseButton>
  <hr />
  <p v-if="message.length % 2 === 0">Even: {{ message.toUpperCase() }}</p>
  <p v-else>Odd: {{ message }}</p>
  <ul>
    <li v-for="(number, index) in listOfNumbers" :key="`number-${index}`">
      {{ number }}
    </li>
  </ul>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
