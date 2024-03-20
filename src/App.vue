<template>
  <v-app>
    <Header />
    <router-view/>
    <Footer />
  </v-app>
</template>

<script>
import Header from "@/components/Header.vue";
import HelloWorld from "./components/HelloWorld.vue";
import Footer from "./components/Footer.vue";

export default {
  components: {
    Header,
    HelloWorld,
    Footer,
}
};
</script>

<style>

.ProductListItem {
position: absolute;
    right: 10px;
    top: 10px;
    padding: 10px;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 40px;
    background: rgba(0,0,0,.4);
    border: 1px solid #fff;
    border-radius: 50%;
}

* {font-family: 'Noto Sans KR', sans-serif;}
* {
  margin: 0;
  padding: 0;
  border: 0;
  color: #1d1d1d;
  overflow: auto;
}

.flex {
  display: flex;
}

.grid {
  display: grid;
}

.Pchip {
  position: relative;
  display: fixed;
}

.v-btn {
  letter-spacing: normal;
  border-style: none;
  box-shadow: none;
}

.v-btn:hover {
  box-shadow: none;
}

.v-btn__content {
    font-size: 18px;
}

</style>