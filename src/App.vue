<script>
import axios from 'axios';
import Main from './components/Main.vue';
import Header from './components/Header.vue';
import { store } from './data/store';
export default {
    components:{
        Header,
        Main,
    }, 
    data() {

        return {
            Header,
            Main,
            store
        }
    },

    methods: {
        getApi(){
            axios.get(store.apiUrl)
            .then(result => {
                store.cardsArr = result.data.data;                
            })
        }
    },
    mounted() {
        this.getApi()
    },
}
</script>

<template>
    <div>
        <Header />
        <Main />
    </div>

</template>

<style lang="scss" scoped>
div{
    background-color: rgb(216, 137, 55);
}
</style>