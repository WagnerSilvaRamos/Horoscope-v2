<template>
  <nav class="navbar navbar-expand-md navbar-light">
    <router-link to="/" tag="a" class="navbar-brand">
      <img :src="image"/>
    </router-link>
    <div class="collapse navbar-collapse mean-menu" style="display: block;">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link to="/" tag="a" class="nav-link">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/about" class="nav-link" tag="a"
            >About Us</router-link
          >
        </li>
        <li class="nav-item">
          <router-link to="/services" class="nav-link" tag="a"
            >Our Services</router-link
          >
        </li>
        <li class="nav-item">
          <router-link to="/forecast" class="nav-link" tag="a"
            >Forecast</router-link
          >
        </li>
        <li class="nav-item">
          <router-link to="/products" class="nav-link" tag="a"
            >Products</router-link
          >
        </li>
        <li class="nav-item">
          <router-link to="/blog" class="nav-link" tag="a">Blog</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/contact" class="nav-link" tag="a"
            >Contact</router-link
          >
        </li>
      </ul>

      <div class="others-option align-items-center">
        <div class="option-item">
          <div class="cart-btn">
            <router-link to="/cart" tag="a"
              ><i class="fa fa-shopping-cart"></i><span>1</span></router-link
            >
          </div>
        </div>

        <div class="option-item">
          <div class="search-btn-box">
            <input type="text" name="search" placeholder="Search.." />
            <a href="#search"><i class="search-btn fa fa-search"></i></a>
          </div>
        </div>
        <div class="option-item">
          <router-link to="/contact" class="btn" tag="a"
            >Appointment</router-link
          >
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
  import imageLogo from "../assets/logo.png";

  export  default {
    data(){
      return{
        image: imageLogo
      }
    }
  }
</script>