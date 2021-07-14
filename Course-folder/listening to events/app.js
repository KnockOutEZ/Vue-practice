const vm = Vue.createApp({
  data() {
    return {
      firstName: 'John',
      middleName:'',
      lastName: 'Doe',
      url: 'https://google.com',
      raw_url: '<a href="https://google.com" target="_blank">Google</a>',
      age: 20
    }
  },
  methods: {
    increment() {
      this.age++
    },
    updateLastName(event) {
      this.lastName = event.target.value
    },
    decrement(){
      this.age--
    },
    UpdateMiddleName(event){
      this.middleName = event.target.value
    }
  },
  computed:{
    fullName() {
      console.log('Fullname computed  was called')
      return `${this.firstName} ${this.middleName} ${this.lastName.toUpperCase()}`
    }
  }
}).mount('#app')

// setTimeout(() => {
//   vm.firstName = 'Bob'
// }, 2000)

// Vue.createApp({
//   data() {
//     return {
//       firstName: 'Jane',
//       lastName: 'Doe'
//     }
//   }
// }).mount('#app2')