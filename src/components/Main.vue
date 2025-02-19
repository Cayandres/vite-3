<script>
import SearchBar from './partials/SearchBar.vue';
import Card from './partials/Card.vue';
import { store } from '../data/store';
export default {
    name: 'Main',
    data() {
        return {
            SearchBar,
            Card,
            store
        }
    },
    components: {
        SearchBar,
        Card,
    }
}
</script>

<template>
    <SearchBar />
    <div class="container">
        <div class="mainContainer">
            <div class="counterC"><p>Carte Trovate: {{ store.cardsArr.length}}</p></div>
            <div class="cardContainer">
                <Card v-for="card in store.cardsArr" :key="card.id"
                :name = card.name
                :img = card.card_images[0].image_url
                :type = "card.archetype || card.type"
                />
                <!-- con questa sintassi ci evitiamo di fare un if se un dato non è presente. Prendiamo unaltro dato e lo stampiamo -->
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>

.mainContainer{
    border: 40px solid white;
    background-color: white;
    
    .counterC{
        height: 40px;
        background-color: black;
        color: white;
        display: flex;
        justify-content: center;
        align-items: center;
        p{
            margin: 0;
        }
    }
    .cardContainer{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;

    }
}

</style>