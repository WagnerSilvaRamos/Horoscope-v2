<template>
  <div class="home">
    <Carousel :itemcaroussel="caroussel" />
    <About />
    <Choosesign />
  </div>
</template>

<script>
import Carousel from "../components/Carousel.vue";
import About from "../components/About";
import Choosesign from "../components/Choosesign.vue";
export default {
  data() {
    return {
      caroussel: "",
    };
  },
  components: {
    Carousel,
    About,
    Choosesign,
  },
};
</script>
