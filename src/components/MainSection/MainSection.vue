<template>
  <section id="app-main-section">
    <div class="app-main-section-wrapper">
      <img class="app-main-section-image" src="../../assets/images/logo.png" />

      <div class="input-group">
        <input
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
        <div class="app-main-section-cards">
          <div
            class="app-main-section-card"
            v-for="card in pagination"
            :key="card.id"
          >
            <img :src="getImage(card.imagem)">
            <div class="app-main-section-card-wrapper">
              <h5>{{ card.nome }}</h5>
              <span v-html="checkValue(card.valor)"></span>
              <span v-html="checkValue(card.valorde)"></span>
            </div>
          </div>
          <span class="app-main-section-cards-btn" @click="cardsToShow += 2"
            >View More</span
          >
        </div>
      </div>

      <div class="app-main-section-icons-group">
        <span class="app-main-section-icon-number">{{ likeCount }}</span>
        <font-awesome-icon
          class="app-main-section-icons heart-icon"
          :icon="['fas', 'heart']"
        />
        <span class="app-main-section-icon-number">{{ bagCount }}</span>
        <font-awesome-icon
          class="app-main-section-icons bag-icon"
          :icon="['fas', 'shopping-bag']"
        />
      </div>
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
import axios from "axios";

export default {
  data() {
    return {
      likeCount: 0,
      bagCount: 0,
      data: [],
      cardsToShow: 6,
    };
  },
  computed: {
    pagination() {
      return this.data.slice(0, this.cardsToShow);
    },
  },
  methods: {
    getData() {
      axios
        .get("http://localhost:3009/getAll")
        .then((res) => {
          this.data = res.data.rows;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    checkValue(value) {
      if (value != null) {
        return `<span>$ ${value}</span>`;
      }
    },
    getImage(img){
        return require(`../../assets/images/produtos/${img}`)
    }
  },
  mounted() {
    this.getData();
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
  position: absolute;
  top: 45px;
  width: 550px;
  height: auto;
  border: 0.5px solid rgb(151, 151, 151);
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

.app-main-section-card {
  background-color: white;
  width: 50%;
  border-bottom: 0.5px solid rgb(151, 151, 151);
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
}
.app-main-section-card-wrapper {
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