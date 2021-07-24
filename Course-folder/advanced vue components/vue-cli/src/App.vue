<template>
 <section>
    <img alt="Vue logo" src="./assets/logo.png">
    <!-- <button @click="age++"></button> -->
    <HelloWorld :age="age" @ageChange="age++" msg="Teri ma ki chut saale"></HelloWorld>
 </section>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  data(){
    return{
      age:20
    }
  },
  components: {
    HelloWorld
  }
}
</script>

<style lang="scss">
$color:#2c3e50;
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $color;
  margin-top: 60px;
}
</style>
