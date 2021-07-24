<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />

    <div class="counter" :style="{ color: $store.state.colorCode }">
      <!-- You can access to state like this -->
      {{ $store.state.counter }}
    </div>

    <div class="squared-counter">
      {{ $store.state.counter }}
      <sup>2</sup> = {{ $store.getters.getSquared }}
    </div>

    <div class="buttons">
      <!-- <button @click="$store.commit('decreaseCounter')">-</button> commit is for calling functions from store.Like normal functions from vue methods -->
      <button @click="$store.dispatch('decreaseCounter')">-</button>
      <!-- <button @click="$store.commit('increaseCounter')">+</button> -->
      <button @click="$store.dispatch('increaseCounter')">+</button>
    </div>

    <div>
      <!-- We could change the color by doing v-model="$store.state.colorCode" -->
      <input v-model="setNewColor" placeholder="enter color code" type="text" />
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  computed: {
    setNewColor: {
      get() {
        return this.$store.state.colorCode;
      },
      set(newValue) {
        this.$store.dispatch("setColorCode", newValue);
      },
    },
  },
};
</script>

<style scoped></style>
