<script>
export default {
    name: 'SearchBar',
    
}
</script>

<template>
    <div class="container">
        
        <select name="type" id="type">
           <option value="1">1</option>
           <option value="1">2</option>
           <option value="1">3</option>
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