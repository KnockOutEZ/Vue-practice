import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  // State is like vue data function.You pass data to child component by props
  state: {
    counter: 0,
    colorCode: "red",
  },
  // Mutation is like vue methods.You can call functions in here
  mutations: {
    increaseCounter(state, randomNumber) {
      state.counter++;
      state.counter += randomNumber;
      console.log(randomNumber);
    },
    decreaseCounter(state, randomNumber) {
      // state.counter-- this is a normal function like vue methods
      state.counter += randomNumber;
      console.log(randomNumber);
    },
    setColorCode(state, newValue) {
      state.colorCode = newValue;
    },
  },
  // Action commits mutations.You can call APIs only in here
  actions: {
    increaseCounter({ commit }) {
      axios(
        "https://www.random.org/integers/?num=1&min=1&max=100&col=10&base=10&format=plain&rnd=new"
      ).then((response) => {
        commit("increaseCounter", response.data);
      });
    },

    decreaseCounter({ commit }) {
      axios(
        "https://www.random.org/integers/?num=1&min=-100&max=1&col=10&base=10&format=plain&rnd=new"
      ).then((response) => {
        commit("decreaseCounter", response.data);
      });
    },

    setColorCode({ commit }, newValue) {
      commit("setColorCode", newValue);
    },
  },
  // getters are like computed properties
  getters: {
    getSquared(state) {
      return state.counter * state.counter;
    },
  },
  modules: {},
});
