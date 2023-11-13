<script>
export default {
    data: () => ({
        count: 10,
        counterTitle: 'Counter Standard',
        incrementAmount: 8,
    }),
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
</template>