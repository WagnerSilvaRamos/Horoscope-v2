<template>
  <div>
    <footer id="footer" class="footer">
      <div class="container-fluid">
        <div class="row">
          <!-- Newslatter-->
          <div class="footer_newslatter">
            <div class="box">
              <div class="row">
                <div class="col-sm-3">
                  <strong>sign up for free</strong>
                </div>
                <div class="col-sm-4">
                  <p>
                    get your daily astrology, daily lovescope and daily tarot by
                    email
                  </p>
                </div>

                <div class="col-sm-5">
                  <form id="newsletter" accept-charset="utf-8">
                    <div class="success" style="display: none;">
                      Your subscribe request has been sent!
                    </div>
                    <label class="email">
                      <input type="email" placeholder="Enter your email here" />
                    </label>
                    <a href="#" data-type="submit">subscribe</a>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <!-- Newslatter end-->
          <div class="container">
            <div class="row footer_matter">
              <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                <div class="footer_logo_wrapper">
                  <img
                    :src="imageFooter"
                    alt="footer_logo"
                    class="img-responsive"
                    data-aos="fade-right"
                  />
                  <h3 data-aos="fade-right">+91-123-456-7890</h3>
                  <p>
                    Donec id elit non mi porta gravida at eget metus. Donec id
                    elit non Vestibulum id ligula porta felis euism od semper.
                  </p>
                  <h4>
                    <a href="#" class="btn">Read More</a>
                  </h4>
                  <ul>
                    <li>
                      <router-link to="/"
                        ><i class="fa fa-facebook"></i
                      ></router-link>
                    </li>
                    <li>
                      <router-link to="/"
                        ><i class="fa fa-twitter"></i
                      ></router-link>
                    </li>
                    <li>
                      <router-link to="/"
                        ><i class="fa fa-youtube-play"></i
                      ></router-link>
                    </li>
                    <li>
                      <router-link to="/"
                        ><i class="fa fa-linkedin"></i
                      ></router-link>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                <div class="footer_list_wrapper">
                  <h2 data-aos="zoom-out">Our Services</h2>
                  <ul class="footer_list">
                    <li>
                      <router-link to="/about" tag="a"
                        ><i class="fa fa-angle-right" aria-hidden="true"></i>
                        About Us</router-link
                      >
                    </li>
                    <li>
                      <router-link to="/services"
                        ><i class="fa fa-angle-right" aria-hidden="true"></i>
                        Our Services</router-link
                      >
                    </li>
                    <li>
                      <router-link to="/products"
                        ><i class="fa fa-angle-right" aria-hidden="true"></i
                        >Products List</router-link
                      >
                    </li>
                    <li>
                      <router-link to="/cart"
                        ><i class="fa fa-angle-right" aria-hidden="true"></i>
                        Forecast</router-link
                      >
                    </li>
                    <li>
                      <router-link to="/checkout"
                        ><i class="fa fa-angle-right" aria-hidden="true"></i
                        >Checkout
                      </router-link>
                    </li>

                    <li>
                      <router-link to="/blog"
                        ><i class="fa fa-angle-right" aria-hidden="true"></i
                        >Blog</router-link
                      >
                    </li>
                    <li>
                      <router-link to="/contact"
                        ><i class="fa fa-angle-right" aria-hidden="true"></i
                        >Contact Us</router-link
                      >
                    </li>
                  </ul>
                </div>
              </div>

              <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                <div class="download_wrapper">
                  <h2 data-aos="fade-up">Download App</h2>
                  <p data-aos="fade-up">Download Our Mobile App</p>
                  <div class="download_btn_wrapper">
                    <router-link to="/" tag="a"
                      ><img :src="imageAp"
                    /></router-link>
                    <router-link to="/" tag="a"
                      ><img :src="imageG"
                    /></router-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>

    <div class="top_button">
      <a class="back-to-top" style="cursor:pointer;" id="top-scrolltop"
        ><i class="fa fa-angle-up"></i
      ></a>
    </div>
  </div>
</template>
<script>
import imageGPlay from "../assets/Google-Play.png";
import imageApp from "../assets/App-Store.png";
import LogoFooter from "../assets/footer_logo.png";

export default {
  data() {
    return {
      imageG: imageGPlay,
      imageAp: imageApp,
      imageFooter: LogoFooter,
    };
  },
};
</script>
