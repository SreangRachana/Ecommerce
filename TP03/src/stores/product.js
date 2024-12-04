import { defineStore } from "pinia";
import axios from 'axios';


export const useProductStore = defineStore('product', {
    state: () => ({
        groups: [],
        promotions: [],
        categories: [],
        products: [],
    }),
    getters: {
        getCategoriesByGroup(groupName) {
            return (groupName) => this.categories.find((category) => category.group === groupName)
       },
       getProductsByGroup(groupName) {
            return (groupName) => this.products.find((product) => product.group === groupName)
       },
       getProductsByCategory(categoryId) {
            return (categoryId) => this.products.find((product) => product.categoryId === categoryId)
       },
       getPopularProducts() {
            const countPopular = 20;
            console.log("Getting Popular")
            const popular = () => this.products.find((product) => product.countSold > countPopular)
            console.log(popular)
            return popular
       },
  
    },
    actions: {
        async fetchCategories(){
            try {
                const response  = await axios.get(' http://localhost:3000/api/categories');
                this.categories = response.data;     
            } catch (error) {
                console.error('Error fetching categories', error);
                this.categories = [];
            }
        },
        async fetchPromotions(){
            try {
                const response = await axios.get('http://localhost:3000/api/promotions');
                this.promotions = response.data;
            } catch (error) {
                console.error("Error fetching promotion",error);
                this.promotions = [];
            }

        },
        async intializeStore(){
            try {
                await Promise.all([
                    this.fetchCategories(),
                    this.fetchPromotions()
                ]);
            } catch (error) {
                console.error('Error during data initialization',error);
            }
        },

        async fetchGroups(){
            try{
                const response = await axios.get("http://localhost:3000/api/groups");
                this.groups = response.data;
            }
            catch{
                console.error("Error fetching groups", error);
                this.groups = [];
            }
        },
        
        async fetchProduct(){
            try{
                const response = await axios.get("http://localhost:3000/api/products");
                this.products = response.data;
            }
            catch{
                console.error("Error fetching groups", error);
               
            }
        }
    },
});