<script>
import axios from 'axios';
import Main from './components/Main.vue';
import Header from './components/Header.vue';
import Loader from './components/partials/Loader.vue';
import SearchBar from './components/partials/SearchBar.vue';
import { store } from './data/store';
export default {
    components:{
        Header,
        Main,
        Loader,
        SearchBar
    }, 
    data() {
        
        return {
            Header,
            Main,
            store,
            Loader,
            SearchBar
        }
    },

    methods: {
        getApi(){
            store.isLoading = true
            axios.get(store.apiUrl, {
                params: {
                    type: store.searchType,
                }
            })
            .then(result => {
                store.cardsArr = result.data.data;  
                store.isLoading = false;
                console.log(store.searchType);
                if (store.typeArr.length === 0) {
                    store.cardsArr.forEach(element => {
                        if (!store.typeArr.includes(element.type)) {
                            store.typeArr.push(element.type)
                        }
                    });              
                }
                    
            })
        }
    },
    mounted() {
        this.getApi()
        
    },
}
</script>

<template>
    <div class="mainCont">
        <Header />
        <Loader v-if="store.isLoading" />
        <div v-else>

            <SearchBar @search="this.getApi"/>
            <Main />

        </div>
    </div>

</template>

<style lang="scss" scoped>
.mainCont{
    background-color: rgb(216, 137, 55);
    padding-bottom: 30px;
}
</style>