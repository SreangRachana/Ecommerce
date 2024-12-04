<template> 
<MenuComponent
  :title="'Feature Products'"
  :navList="groups"
  @change-nav="changeProductGroup"
  />
<!-- <ButtonComponent /> -->
 <CategoryComponent v-for="category in categories" :name="category.name" :productCount="category.productCount" :image="category.image" :color="category.color" :key="category"/>
 <PromotionComponent v-for="promotion in promotions" :title="promotion.title" :color="promotion.color" :image="promotion.image" :buttonColor="promotion.buttonColor" :url="promotion.url" :key="promotion.title"></PromotionComponent>

 <MenuComponent
  :title="'Popular Products'"
  :navList="groups"
  @change-nav="changeProductGroup"
  />

<!-- <ProductComponent 
  :rating="5"
/> -->

  <div class="product-list">
    <template v-for="item in products" :key="item">
      <ProductComponent
      :productName="item.name"
      :imgPath="item.image"
      :rating="item.rating"
      :discountPercent="item.promotionAsPercentage"
      :price="item.price"
      :countSold="item.countSold"
      :instock="item.instock"
  
      />
    </template>
  </div>
</template>


  <script>
  // import { RouterView } from 'vue-router'
  import { mapState } from 'pinia';
  import { useProductStore } from './stores/product';
  import CategoryComponent from './components/CategoryComponent.vue';
  import PromotionComponent from './components/PromotionComponent.vue';
  import MenuComponent from './components/MenuComponent.vue';
  import ProductComponent from './components/ProductComponent.vue';
  // import ButtonComponent from './components/ButtonComponent.vue';
  export default {
    name: 'App',
    components: {
      CategoryComponent,
      PromotionComponent,
      MenuComponent,
      ProductComponent,
      // ButtonComponent
    }, 
    setup() {
      const productStore = useProductStore();

      return {
        productStore
      }
    },

    data(){
      return{
        currentGroupName: "Snacks"
      }
    },
    computed: {
      ...mapState(useProductStore, {
        categories: "categories",
        promotions: "promotions",
        products: "products",
        groups: "groups",

        // categories(store) {
        //   const category = store.getCategoriesByGroup(this.currentGroupName)
        //   console.log("Categories by group name");
        //   console.log(category);
        //   return category;
        // },

        popularProducts(store){
          const products = store.getProductsByGroup()
          console.log("Popular products")
          console.log(products)
          return products;
        }
      })
    },
    async mounted() {
      await this.productStore.fetchCategories();
      await this.productStore.fetchPromotions();
      await this.productStore.fetchGroups();
      await this.productStore.fetchProduct();
    }
  
    }
  
  </script>

<style scoped>
template{
  box-sizing: border-box;
  margin:none;
  padding:none;
  overflow:none;
 
}

.product-list {
  margin: 10px;
  display: grid;
  grid-template-rows: repeat(2, 424px);
  grid-template-columns: repeat(5, 300px);
  gap: 18px;
}
</style>
