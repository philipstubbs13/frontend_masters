<script>
export default {
  data() {
    return {
      count: 10,
      counterTitle: 'Counter Standard',
      incrementAmount: 8,
      message: 'Hello it works',
      listOfNumbers: [1, 2, 3, 4, 5]
    }
  },
  computed: {
    displayTitle() {
      if (this.count > 20) {
        return 'Counter Standard - Very Long'
      } else {
        return 'Counter Standard'
      }
    },
    optimizedIncrementAmount() {
      return this.displayTitle.length * this.incrementAmount
    }
  },
  methods: {
    incrementCount() {
      this.count += this.optimizedIncrementAmount
    }
  },
  watch: {
    count(newValue) {
      if (newValue > 20) {
        this.counterTitle += ' Very Long'
      }
    }
  }
}
</script>

<template>
  <h1>{{ displayTitle }}</h1>
  <p>{{ count }}</p>
  <button v-on:click="incrementCount">Increment Count</button>
  <h1>{{ incrementAmount }}</h1>
  <p>{{ optimizedIncrementAmount }}</p>
  <div>
    <label for="incrementAmount">Increment by:</label>
    <input type="number" v-model="incrementAmount" />
  </div>
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
