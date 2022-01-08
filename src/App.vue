<template>
  <base-container title="Vuex">
    <h3>{{ counter }}</h3>
    <h3>{{ counter2 }}</h3>
    <button @click="addOne">Add 10</button>
    <change-counter></change-counter>
  </base-container>
</template>

<script>
import BaseContainer from './components/BaseContainer.vue';
import ChangeCounter from './components/ChangeCounter.vue';

export default {
  components: {
    BaseContainer,
    ChangeCounter,
  },
  methods: {
    addOne() {
      // this.$store.commit('increase', {value: 10});
      // Below commit is the same as above
      // (COMMIT MUTATION)
      // this.$store.commit({
      //   type: 'increase',
      //   value: 10,
      // });

      //  (DISPATCH ACTION)
      this.$store.dispatch({
        type: 'increase',
        value: 10,
      });
    },
  },
  computed: {
    counter() {
      return this.$store.getters.finalCounter;
    },
    counter2() {
      return this.$store.getters.tenTimes;
    },
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>
