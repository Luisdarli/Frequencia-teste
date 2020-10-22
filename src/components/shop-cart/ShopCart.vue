<template>
  <div class="app-main-section-icons-group">
    <span class="app-main-section-icon-number">{{ likeCount }}</span>
    <font-awesome-icon
      class="app-main-section-icons heart-icon"
      :icon="['fas', 'heart']"
    />
    <span class="app-main-section-icon-number" :class="{ active: active }">{{
      cartSize
    }}</span>
    <font-awesome-icon
      @click="showCart"
      class="app-main-section-icons"
      :icon="['fas', 'shopping-bag']"
    />
    <div v-if="active" class="app-shop-cart">
      <div class="app-shop-cart-wrapper">
        <h3 class="app-shop-cart-title">Shopping Cart</h3>
        <font-awesome-icon
          @click="showCart"
          class="app-shop-cart-icon"
          :icon="['fas', 'times-circle']"
        />
      </div>
      <div class="app-shop-cart-itens" v-for="item in cart" :key="item.id">
        <div class="app-shop-cart-itens-wrapper">
          <img :src="getImage(item.imagem)" />
          <h5 class="app-shop-cart-itens-title">{{ item.nome }}</h5>
          <font-awesome-icon
            @click="removeCart(item.id)"
            class="app-shop-cart-itens-icon"
            :icon="['fas', 'times-circle']"
          />
        </div>
        <span class="app-shop-cart-itens-quantity">{{ item.quantity }} x</span>
        <span
          class="app-shop-cart-itens-price"
          v-html="checkValue(item.valor)"
          >{{ item.valor }}</span
        >
      </div>

      <span class="app-shop-cart-total"
        ><b>Subtotal:</b>
        <span class="app-shop-cart-itens-price">$ {{ cartTotalAmount }}</span>
      </span>
      <div class="app-shop-cart-buttons">
        <span class="app-shop-cart-button">View cart</span>
        <span class="app-shop-cart-button">Checkout</span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";
export default {
  data() {
    return {
      likeCount: 0,
      active: false,
    };
  },
  computed: {
    ...mapState(["cart"]),
    ...mapGetters(["cartSize", "cartTotalAmount"]),
  },
  methods: {
    showCart() {
      this.active = !this.active;
    },
    removeCart(id) {
      this.$store.dispatch("removeFromCart", id);
    },
    checkValue(value) {
      if (value != null) {
        return `<span>$${value}</span>`;
      }
    },
    getImage(img) {
      return require(`../../assets/images/produtos/${img}`);
    },
  },
};
</script>

<style scoped>
.app-main-section-icon-number {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 10px;
  right: -65px;
  top: -8px;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: rgb(210, 210, 210);
}
.app-main-section-icons-group {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
}
.app-main-section-icons {
  cursor: pointer;
  color: black;
  font-size: 30px;
  margin-left: 25px;
}

.app-shop-cart {
  position: fixed;
  z-index: 1;
  top: 0;
  right: 0;
  height: 100vh;
  width: 500px;
  background-color: #b2b2b2;
  transition: 0.5s;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: auto;
}
.app-shop-cart-wrapper {
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-around;
  padding: 20px 0;
}
.app-shop-cart-title {
  margin: 0;
  font-weight: 600;
}
.app-shop-cart-icon {
  font-size: 26px;
}

.app-shop-cart-itens {
  width: 90%;
  border-top: 2px solid rgb(240, 240, 240);
  padding: 10px 0;
}
.app-shop-cart-itens-wrapper {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;
}
.app-shop-cart-itens img {
  width: 100px;
  height: auto;
}
.app-shop-cart-itens-title {
  color: #007cff;
  margin-left: 8px;
}
.app-shop-cart-itens-icon {
  font-size: 16px;
  color: red;
}

.app-shop-cart-itens-price {
  color: #51aa1b;
  margin-left: 10px;
}
.app-shop-cart-total {
  padding-left: 20px;
  width: 100%;
  display: flex;
  align-items: flex-start;
}
.app-shop-cart-buttons {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}
.app-shop-cart-button {
  margin: 20px;
  padding: 15px 40px;
  border-radius: 30px;
  background-color: #007cff;
  color: #ffffff;
}
</style>