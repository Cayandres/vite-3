<script>
import { store } from '../../data/store';
export default {
    name: 'SearchBar',
    data() {
        return {
            store,
        }
    },
    
}
</script>

<template>
    <div class="container">
        
        <select  v-model="store.searchType" name="type" id="type">
            <option  value="">Select Type</option>
            <option @click="$emit('search')" v-for="type in store.typeArr" :key="type" :value="type">{{ type }}</option>
        </select>

    </div>
</template>

<style lang="scss" scoped>
select{
    margin-bottom: 10px;
    width: 8rem;
    background-color: white;
    border: 1px solid lightgray;
    padding: 3px;
}

</style>