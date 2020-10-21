import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';

Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        products: null,
        cart:[],
    },
    getters:{
        cartSize:(state) => {
            return state.cart.length;
        },
        cartTotalAmount:(state) => {
            return state.cart.reduce((total, product) => {
                return total + (product.valor * product.quantity);
            },0);
        },
        showMoreCards:(state) =>{
            return state.products;
        }
    },
    mutations:{
        setUpProducts:(state, productsPayload) => {
            state.products = productsPayload.data.rows;
        },
        addToCart:(state, productId) => {
            //find product in product list
            let product = state.products.find((product) => product.id === productId);
            //find product in cart list
            let cartProduct = state.cart.find((product) => product.id === productId);

            if(cartProduct){
                cartProduct.quantity++;
            }else{
                state.cart.push({
                    ...product,
                    stock: product.quantity,
                    quantity: 1
                })
            }
        },
    },
    actions:{
        fetchProducts:({ commit }) => {
            axios
            .get("http://localhost:3009/getAll")
            .then((res) => {
               commit("setUpProducts", res);
            })
            .catch((err) => {
              console.log(err);
            });
        },
        addToCart: ({ commit }, productId) => {
            commit("addToCart", productId)
        },
    }
})

