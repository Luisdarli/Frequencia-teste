<template>
  <header id="app-main-header">
    <ul class="app-main-header-list">
      <li>
        <a href="#">
          <font-awesome-icon
            class="app-main-header-icon"
            :icon="['fa', 'truck']"
          />Free Delivery
        </a>
      </li>
      <li><a href="#">Returns Policy</a></li>
      <li><a href="#">Follow Us</a></li>

      <li>
        <a href="#"
          ><font-awesome-icon
            class="app-main-header-icon"
            :icon="['fab', 'facebook-f']"
        /></a>
      </li>
      <li>
        <a href="#"
          ><font-awesome-icon
            class="app-main-header-icon"
            :icon="['fab', 'twitter']"
        /></a>
      </li>
      <li>
        <a href="#"
          ><font-awesome-icon
            class="app-main-header-icon"
            :icon="['fab', 'pinterest-p']"
        /></a>
      </li>
      <li>
        <a href="#"
          ><font-awesome-icon
            class="app-main-header-icon"
            :icon="['fab', 'instagram']"
        /></a>
      </li>
    </ul>
    <span class="app-main-header-login-btn"><a href="#">Login</a></span>
  </header>
</template>

<script>
export default {};
</script>

<style scoped>
#app-main-header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: nowrap;
  background-color: #51aa1b;
  font-weight: 500;
  font-size: 16px;
}
.app-main-header-list {
  margin: 0;
  margin-left: 70px;
  list-style: none;
  padding: 15px;
}
.app-main-header-icon {
  margin-right: 5px;
}
.app-main-header-list li {
  color: #ffffff;
  display: inline-block;
  padding: 0px 15px;
}

.app-main-header-list li:nth-child(1),
.app-main-header-list li:nth-child(2) {
  border-right: 1.5px solid #ffffff;
}

.app-main-header-login-btn {
  color: #ffffff;
  display: flex;
  align-items: center;
  margin-right: 70px;
}

@media only screen and (max-width: 615px) {
  .app-main-header-list li:nth-child(1),
  .app-main-header-list li:nth-child(2),
  .app-main-header-list li:nth-child(3) {
    display: block;
    border: none;
  }
}
</style>