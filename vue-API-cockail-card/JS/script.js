const {createApp} = Vue;

const app = createApp({
    data(){
        return{
            cocktails: [],
        }
    },
    methods:{
        callApi(){
            axios.get('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita').then((res)=>{
                console.log(res.data.drinks);
                this. cocktails = res.data.drinks;
            })
        }
        
    },
    created(){
        
        
    },
    mounted(){
        this.callApi();
    }
});
app.mount('#app');