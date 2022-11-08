/*Descrizione:
[x] Attraverso l'apposita API di Boolean 
https://flynn.boolean.careers/exercises/api/random/mail
generare 10 indirizzi email e stamparli in pagina all'interno di una lista.

Bonus
[x] Far comparire gli indirizzi email solamente quando sono stati tutti generati.
*/

const {createApp} = Vue;

const app = createApp({
    data(){
        return{
            emails: [],
        }
    },
    methods:{
        callApi(){
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((res)=>{
                // console.log(res.data.response);   
                // Push a randomly generated email to emails [] 
                this.emails.push(res.data.response);
                console.log(this.emails);
            })
        }
    },
    created(){
        // Executes the callApi method 10 times 
        for(let i = 0; i < 10; i++){
                this.callApi();
        }
    },
});
app.mount('#app');