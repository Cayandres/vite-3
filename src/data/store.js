import{ reactive } from 'vue'
// con questa funzione riesco a rendere globali tutti i dati che metto all'interno
export const store = reactive({

    apiUrl: 'https://db.ygoprodeck.com/api/v7/cardinfo.php',
    cardsArr: [],
    isLoading: true,
    typeArr: [],
    allCardsArr: [],
    searchType: null
});