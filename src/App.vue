<template>
  <div id="app">
    <Header />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";

export default {
  data() {
    return {
      caroussel: "",
    };
  },
  components: {
    Header,
    Footer,
  },

  /*head: {
    script: [
      {
        type: "text/javascript",
        src: "../assets/script.js",
        async: true,
        body: true,
      },
    ],
  },*/
  mounted() {
    let externalJquery = document.createElement("script");
    externalJquery.setAttribute(
      "src",
      "https://code.jquery.com/jquery-3.5.1.min.js"
    );
    document.head.appendChild(externalJquery);

    let externalScript = document.createElement("script");
    externalScript.setAttribute(
      "src",
      "http://www.wagneramos.com.br/teste/assets-horoscope/scripth.js"
    );
    document.head.appendChild(externalScript);
  },
};
</script>

<style lang="scss">
@import "./styles/_main.scss";
</style>
