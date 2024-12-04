<template>
    <link
        href="https://cdn.jsdelivr.net/npm/remixicon@4.4.0/fonts/remixicon.css"
        rel="stylesheet"
    />
    <div class="container">
        <div class="content" :style="{backgroundColor: color}">
            <div class="wrapper text">
                <div class="dpt">
                    <h1>{{ title }}</h1>
                </div>
                <div class="btn">
                    <button @click="shopNow(title)" :style="{ backgroundColor: '#' + buttonColor,color:'white',padding:'8px',border:0,borderRadius:'6px' }">
                        Shop Now
                        <i class="ri-arrow-right-line"></i>
                    </button>
                </div>
            </div>
            <div class="wrapper image">
                <img
                    id="image"
                    :src = "'http://localhost:3000/' + image"
                    alt="fruit"
                />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'PromotionComponent',
    props: ["title", "color", "image", "buttonColor", "url"],
    methods:{
        shopNow(title){
            alert("Let's Shop: " + title);
        }
    }
}
</script>

<style scoped>

.container {
    display: inline-flex;
    flex-direction: row;
    justify-content: space-between;
    padding:5px;
    margin-top:10px;
}

.content {
    display: flex;
    justify-content: center;
    align-items: center; 
    background-color: #f0e8d5;
    color: black;
    width: 600px;
    height: 350px;
    margin: 0;
    padding: 30px 50px;
    border-radius: 15px;
}

.wrapper {
    width: 50%;
}

.wrapper.text {
    align-self: center;
    justify-self: center;
    flex-grow: 2;
}

.wrapper.image {
    align-self: flex-end;
    flex-grow: 1;
}

#image {
    width: 100%; /* Adjusted to make the image responsive */
    height: auto; /* Maintain aspect ratio */
}

</style>
