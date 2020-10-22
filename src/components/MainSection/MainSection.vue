<template>
  <section id="app-main-section">
    <div class="app-main-section-wrapper">
      <img class="app-main-section-image" src="../../assets/images/logo.png" />

      <div class="input-group">
        <input
          @click.stop="showCards"
          class="app-main-section-input"
          type="text"
          placeholder="Find your product"
        />

        <span class="app-main-section-icon-content">
          <font-awesome-icon
            class="app-main-section-icon"
            :icon="['fas', 'search']"
          />
        </span>
        <div
          v-show="shouldShowCards"
          v-click-outside="hideCards"
          class="app-main-section-cards"
          id="app-main-section-show-cards"
        >
          <div
            class="app-main-section-card"
            v-for="card in pagination.slice(0, cardsToShow)"
            :key="card.id"
            @click="addToCart(card.id)"
          >
            <img  :src="getImage(card.imagem)" />
            <div class="app-main-section-card-wrapper">
              <h5>{{ card.nome }}</h5>
              <span
                class="app-main-section-card-value"
                v-html="checkValue(card.valorde)"
              ></span>
              <span
                class="app-main-section-card-value-offer"
                v-html="checkValue(card.valor)"
              ></span>
            </div>
          </div>
          <div class="app-main-section-cards-btn-content">
            <span class="app-main-section-cards-btn" @click="cardsToShow += 2"
              >View More</span
            >
          </div>
        </div>
      </div>

      <shop-cart /> <!-- IMPORT COMPONENT -->
    </div>

    <div class="app-main-section-wrapper">
      <div>
        <b-dropdown
          size="lg"
          variant="link"
          toggle-class="text-decoration-none"
          text="All Categories"
          no-caret
          class="app-main-section-dropdown-btn"
        >
          <template slot="button-content" class="app-main-section-dropdown">
            <font-awesome-icon
              class="app-main-section-dropdown-icon"
              :icon="['fas', 'list']"
            />All Categories
            <font-awesome-icon
              class="app-main-section-dropdown-icon"
              :icon="['fas', 'chevron-down']"
            />
          </template>
          <b-dropdown-item href="#">Categoria 1</b-dropdown-item>
          <b-dropdown-item href="#">Categoria 2</b-dropdown-item>
          <b-dropdown-item href="#">Categoria 3</b-dropdown-item>
        </b-dropdown>
      </div>

      <ul class="app-main-section-list">
        <li>
          <a href="#"
            >Home<font-awesome-icon
              class="app-main-section-list-icon"
              :icon="['fas', 'chevron-down']"
          /></a>
        </li>
        <li>
          <a href="#"
            >Pages<font-awesome-icon
              class="app-main-section-list-icon"
              :icon="['fas', 'chevron-down']"
          /></a>
        </li>
        <li>
          <a href="#"
            >Shop<font-awesome-icon
              class="app-main-section-list-icon"
              :icon="['fas', 'chevron-down']"
          /></a>
        </li>
        <li>
          <a href="#"
            >Blog<font-awesome-icon
              class="app-main-section-list-icon"
              :icon="['fas', 'chevron-down']"
          /></a>
        </li>
        <li>
          <a href="#"
            >Gallery<font-awesome-icon
              class="app-main-section-list-icon"
              :icon="['fas', 'chevron-down']"
          /></a>
        </li>
      </ul>

      <span class="app-main-section-btn"
        ><span style="text-transform: uppercase; display: block"
          >Black Friday</span
        ><span>Get 45% Off!</span></span
      >
    </div>
  </section>
</template>

<script>

import ShopCart from "../shop-cart/ShopCart";

export default {
  data() {
    return {
      data: [],
      shouldShowCards: false,
      cardsToShow: 6,
    };
  },
  components: {
    "shop-cart": ShopCart,
  },
  computed: {
    pagination(){
     return this.$store.state.products
    },
  },
  methods: {
    checkValue(value) {
      if (value != null) {
        return `<span>$${value}</span>`;
      }
    },
    addToCart(id){
      this.$store.dispatch("addToCart", id);
    },
    getImage(img) {
      return require(`../../assets/images/produtos/${img}`);
    },
    showCards() {
      this.shouldShowCards = true; 
    },
    hideCards() { 
      this.shouldShowCards = false;
    },
  },
  created() {
    this.$store.dispatch("fetchProducts");
  },
};
</script>

<style scoped>
#app-main-section {
  margin: 0 auto;
  width: 80%;
}
.app-main-section-wrapper {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;
}
.app-main-section-image {
  width: 250px;
}
.input-group {
  display: flex;
  align-content: stretch;
  justify-content: center;
}
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
.app-main-section-input {
  width: 500px;
}

::placeholder {
  padding: 0 20px;
}

.app-main-section-cards {
  display: flex;
  position: absolute;
  top: 45px;
  width: 650px;
  height: auto;
  border: 0.5px solid rgb(151, 151, 151);
  flex-direction: row;
  flex-wrap: wrap;
  border-radius: 8px;
}

.app-main-section-card {
  padding: 15px;
  background-color: white;
  width: 50%;
  border-bottom: 0.5px solid rgb(151, 151, 151);
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}
.app-main-section-card img {
  width: 80px;
  height: auto;
}
.app-main-section-card-wrapper {
}
.app-main-section-card-value {
  color: rgb(185, 185, 185);
  text-decoration: line-through;
}
.app-main-section-card-value-offer {
  color: #51aa1b;
}
.app-main-section-cards-btn-content {
  padding: 40px;
  display: block;
  width: 100%;
}
.app-main-section-cards-btn {
  cursor: pointer;
  padding: 15px 20px;
  background-color: #4a4a4a;
  color: #ffffff;
}
.app-main-section-card-wrapper span {
  margin-right: 10px;
}

.app-main-section-card:nth-child(odd) {
  border-right: 0.5px solid rgb(151, 151, 151);
}

.app-main-section-icon-content {
  padding: 10px 25px;
  background-color: #51aa1b;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
}

.app-main-section-icon {
  color: #ffffff;
}

.app-main-section-icons-group {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
}
.app-main-section-icons {
  color: black;
  font-size: 30px;
  margin-left: 25px;
}

.app-main-section-dropdown-btn {
  border: 1px solid #51aa1b;
  background-color: #51aa1b;
}
.app-main-section-dropdown {
  display: flex;
  align-items: center;
  justify-content: center;
}
.app-main-section-dropdown-icon {
  margin: 0 15px;
}

.app-main-section-list {
  list-style: none;
}
.app-main-section-list li {
  display: inline-block;
  margin-right: 15px;
  transition: all 0.5s;
}
.app-main-section-list li:hover {
  color: #51aa1b;
}
.app-main-section-list li a {
  display: flex;
  align-items: center;
  justify-content: center;
}
.app-main-section-list-icon {
  margin-left: 5px;
}

.app-main-section-btn {
  background-color: #ff6251;
  border: 1px solid #ff6251;
  width: 234.734px;
  height: auto;
  color: #ffffff;
  cursor: pointer;
}
</style>

<style>
/* NO SCOPED STYLE FOR BOOTSTRAP */

.btn-link {
  color: #ffffff !important;
}
</style>