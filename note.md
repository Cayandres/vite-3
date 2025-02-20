b## State menagement

-PROPS: Per passare informazione da padre a figlio.
-PROP DIRLLING: è quando passiamo l'informazione come un passa parola tra componenti, ed è sbagliato.
-STATE MENAGEMENT: è una fonte di dati raggiungibili da tutti i nostri componenti. \
 export const store = reactive({

    apiUrl: 'https://db.ygoprodeck.com/api/v7/cardinfo.php',
    cardsArr: [],

});

:type = "card.archetype || card.type"
/>

<!-- con questa sintassi ci evitiamo di fare un if se un dato non è presente. Prendiamo unaltro dato estampiamo -->

## Emit

-proprieta di comunicare dall'input al genitore.
es: <button> @click="$emit('nome emit', 'primo parametro', 'secondo parametro')"> Evento Custom</button>

- Siamo nel ambiente figlio dove andiamo a dire al nostro bottone che al suo interno contiene un emit.
  é possibilè dichiararlo direttamente in methods ma è più semplice farlo direttamente in linea es:
  <script>
  methods: {
    altroevento(){
        this.$emit('nome emit', 'primo parametro', 'secondo parametro')
    }
  }
  <script/>
  
  <template>
  <button @click="altroEvento"> evento custom 2<button/>
  <template/>
  -in questo secondo esempio andiamo a dichirare l'emit nei methods e poi lo richiamiamo all'evento del click, se vogliamo dichiararlo nei data, dobbiamo mettrgli il this.$emit.


- ci spostiamo nel main dove per dichiarare richiamare un emit dobbiamo fare così:
<footer @mioEvento="funzione che si trova nel genitore" @altroEventoCustom="altroEvento"/>
-ovviamente le funzioni che richiamiamo devono essere nei data dei genitori ovvero dove stiamo facendo la chiamata emit. Non serve richiamare i parametri perchè sono implicitamente inclusi

-con le [] passiamo il valore dinamico es:
-nextPrev(valore-passato){
store.apiUrl = store[valore-passato]
}

-utilizzo methods se devo modificare dei dati.
-utilizzo le computed se devo modificare la presentazione dei dati. Ossia non li omdifica ma li presenta come voglio io.
