<template>
  <div id="content" class="forecast_page">
    <div class="aries_wrapper">
      <div class="container-fluid">
        <div class="row">
          <div class="col-sm-3">
            <div class="eb_left">
              <div id="category" class="social_media">
                <h3 class="wow fadeInDown animated">Follow Us</h3>
                <ul class="wow fadeInDown animated">
                  <li class="facebook">
                    <a href="#"><i class="fa fa-facebook"></i> facebook</a>
                  </li>
                  <li class="twitter">
                    <a href="#"><i class="fa fa-twitter"></i> twitter</a>
                  </li>
                  <li class="instagram">
                    <a href="#"> <i class="fa fa-instagram"></i> instagram</a>
                  </li>
                  <li class="google">
                    <a href="#"><i class="fa fa-google-plus"></i> Google</a>
                  </li>
                  <li class="youtube">
                    <a href="#"><i class="fa fa-youtube-play"></i> youtube</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div class="col-sm-6">
            <div class="aries_center">
              <div class="eb_matter">
                <h1>{{ sign.namesign }}</h1>
                <span>| {{ sign.datasign }}</span>
                <img :src="sign.singleimg" :alt="sign.alt" />
                <h2>{{ sign.titlefeaturelarge }}</h2>
                <p>{{ sign.descfeaturelarge }}</p>

                <h2>{{ sign.titlefeaturellove }}</h2>
                <p>{{ sign.descfeaturelove }}</p>

                <h2>{{ sign.titlefeaturehealth }}</h2>
                <p>{{ sign.descfeaturehealth }}</p>

                <h2>{{ sign.titlefeaturecareer }}</h2>
                <p>{{ sign.descfeaturecareer }}</p>
              </div>
            </div>
          </div>

          <div class="col-sm-3">
            <div class="eb_right">
              <div id="category" class="zodiac_sign">
                <h3 class="wow fadeInDown animated">Zodiac Sign</h3>
                <ul class="wow fadeInDown animated">
                  <li>
                    <a href="#"
                      ><i class="fa fa-angle-right" aria-hidden="true"></i>
                      Aries</a
                    >
                  </li>
                  <li>
                    <a href="#"
                      ><i class="fa fa-angle-right" aria-hidden="true"></i>
                      Taurus</a
                    >
                  </li>
                  <li>
                    <router-link to="/sign/3" tag="a">
                      ><i class="fa fa-angle-right" aria-hidden="true"></i>
                      Gemini</router-link
                    >
                  </li>
                  <li>
                    <a href="#"
                      ><i class="fa fa-angle-right" aria-hidden="true"></i>
                      Cancer</a
                    >
                  </li>
                  <li>
                    <a href="#"
                      ><i class="fa fa-angle-right" aria-hidden="true"></i>
                      leo</a
                    >
                  </li>
                  <li>
                    <a href="#"
                      ><i class="fa fa-angle-right" aria-hidden="true"></i>
                      Virgo</a
                    >
                  </li>
                  <li>
                    <a href="#"
                      ><i class="fa fa-angle-right" aria-hidden="true"></i>
                      Libra</a
                    >
                  </li>
                  <li>
                    <a href="#"
                      ><i class="fa fa-angle-right" aria-hidden="true"></i>
                      Scorpio</a
                    >
                  </li>
                  <li>
                    <a href="#"
                      ><i class="fa fa-angle-right" aria-hidden="true"></i>
                      Sagittairus</a
                    >
                  </li>
                  <li>
                    <a href="#"
                      ><i class="fa fa-angle-right" aria-hidden="true"></i>
                      Capricorn</a
                    >
                  </li>
                  <li>
                    <a href="#"
                      ><i class="fa fa-angle-right" aria-hidden="true"></i>
                      Aquarius</a
                    >
                  </li>
                  <li>
                    <a href="#"
                      ><i class="fa fa-angle-right" aria-hidden="true"></i>
                      Pisces</a
                    >
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: this.$route.params.id,
      sign: {},
      listsigns: "",
      readsign: "",
    };
  },

  created() {
    this.$http.get("listasignosh/" + this.id).then((response) => {
      this.sign = response.body;
      console.log(response);
    });
  },
};
</script>
