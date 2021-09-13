
const app = Vue.createApp({
    // template: `
    // <h1> Hola Mundo </h1>
    // <p>Desde app.js</p>
    
    // `

    data() {
        return {
            quote: 'Im Batman ',
            author: 'Bruce Wayne'
        }
    },
    methods:{
        changeQuote(){
            console.log('Hola')
            this.author='Claudia Mendoza'
            this.capitalize()
        },
        capitalize(){
            this.quote = this.quote.toUpperCase()
        }
    }
})

app.mount('#myApp')