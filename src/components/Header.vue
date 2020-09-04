<template>
  <div>
    <header class="header-area">
      <TopHeader />
      <div class="navbar-area">
        <Responsivenav />
        <div class="astrology-nav">
          <div class="container-fluid">
            <div class="row">
              <div class="header_menu_wrapper">
                <Nav />
                <div class="clear"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- End Navbar Area -->
    </header>
  </div>
</template>

<script>
import TopHeader from "./Topheader";
import Responsivenav from "./Responsivenav.vue";
import Nav from "./Nav.vue";

export default {
  components: {
    TopHeader,
    Responsivenav,
    Nav,
  },
};
</script>
