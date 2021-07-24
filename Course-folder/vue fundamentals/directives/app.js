Vue.createApp({
    data(){
        return{
            Puki:"Pukka",
            Puka:"Pakka",
            url:"https://www.google.com/",
            raw_url:"<a href='https://www.google.com/' target='_blank'>Google</a>"
        }
    },
    methods:{
        fullName(){
            return {Puki}
        }
    }
}).mount('#app')