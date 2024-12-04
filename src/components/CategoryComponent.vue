<template>
    <div class="container">
        <div class="items" :style="{ backgroundColor: color }">
            <img :src="'http://localhost:3000/'+image">
            <h3>{{ name }}</h3>
            <p>{{ productCount }} Items</p>
        </div>
        
    </div>
</template>

<script>
export default {
    name: 'CategoryComponent',
    props: ["name", "productCount","color", "image"]
}
</script>

<style scoped>
/*TODO: Haven't style the component yet*/
    .container{
        display:inline-flex;
        flex-direction: row;
       
    }
    .items{
        display:flex;
        flex-direction: column;
        justify-content: center;
        align-content: center;
        margin:8px;
        background-color:#f2fce4;
        color: black;
        padding:50px 40px;
        text-align: center;
        border-radius: 10px;
    }
    img{
        width: 80px;
        height: 80px;
        border-radius: 10px;
        background-position: center;
    }
    p{
        color: #c6cabf;
    }
</style>
