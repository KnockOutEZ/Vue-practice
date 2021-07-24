let vm = Vue.createApp({
  data() {
    return {
      message: "Hello world!"
    }
  },
  beforeCreate(){
    console.log('beforeCreated hook called',this.message)
  },
  created(){
    console.log('Created hook called',this.message)
  },
  beforeMount(){
    console.log('beforeMount hook called',this.$el)
  },
  mounted(){
    console.log('mounted hook called',this.$el)
  },

}).mount('#app')