<script>
export default {
    name: 'Card',
    data() {
        return {
            
        }
    },
    props: {
        name: String,
        img: String,
        type: String
    }
    
}
</script>

<template>
    <div class="card-ac">
        <figure>
            <img :src="img" alt="">
            <figcaption id="firstCap">{{name}}</figcaption>
            <figcaption id="secondCap">{{ type }}</figcaption>
        </figure>
    </div>   
</template>

<style lang="scss" scoped>
        .card-ac{ 
            width: 19%;
            figure{
                min-height: 409px;
                width: 100%;
                text-align: center;
                background-color: rgb(216, 137, 55);
                margin-bottom: 30px;
                #firstCap{
                    font-weight: 700;
                    color: white;
                }
                #secondCap{
                    font-weight: 500;
                }
                img{
                    width: 100%;
                }
            }
        }
</style>