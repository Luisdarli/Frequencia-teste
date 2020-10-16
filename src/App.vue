<template>
  <div id="app">
    <main-header />
    <main-section />
  </div>
</template>

<script>
//REGISTER ICONS FONTAWESOME
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTruck, faSearch, faHeart, faShoppingBag, faList, faChevronDown} from '@fortawesome/free-solid-svg-icons'
import {faFacebookF, faTwitter, faPinterestP, faInstagram} from '@fortawesome/free-brands-svg-icons'

library.add(faTruck, faFacebookF, faTwitter, faPinterestP, faInstagram, faSearch, faHeart, faShoppingBag, faList, faChevronDown)



import Header from './components/Header/Header'
import MainSection from './components/MainSection/MainSection'

export default {
  name: 'App',
  components: {
    'main-header': Header,
    'main-section': MainSection,
  },
}
</script>

<style>
@font-face {
  font-family: "Varela Round";
  src: url(./assets/font-family/VarelaRound-Regular.ttf);
}
body{
  margin: 0;
  padding: 0;
}
/* CONFLICT WITH BOOTSTRAP */
a{
  text-decoration: none !important; 
  color: inherit !important;
}

#app {
  font-family:"Varela Round", Arial, serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin: 0;
  padding: 0;
}
</style>
