## State menagement

-PROPS: Per passare informazione da padre a figlio.
-PROP DIRLLING: è quando passiamo l'informazione come un passa parola tra componenti, ed è sbagliato.
-STATE MENAGEMENT: è una fonte di dati raggiungibili da tutti i nostri componenti. \
 export const store = reactive({

    apiUrl: 'https://db.ygoprodeck.com/api/v7/cardinfo.php',
    cardsArr: [],

});

## Emit

-proprieta di comunicare dall'input al genitore.
