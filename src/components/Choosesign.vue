<template>
  <div>
    <!-- Zodiac Sign -->
    <div id="zodiac_Sign" class="rashi_wrapper">
      <div class="container-fluid">
        <div class="heading_wrapper">
          <h2 data-aos="zoom-out">Choose Your <span>Zodiac Sign</span></h2>
          <p data-aos="zoom-out">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
          </p>
        </div>
        <div class="row">
          <div
            class="col-lg-2 col-md-3 col-sm-4 col-xs-12"
            v-for="(listsigns, index) in listsigns"
            :key="index"
            data-aos="flip-left"
          >
            <div class="rashi_sign_box">
              <router-link :to="'/sign/' + listsigns.id" tag="a">
                <div class="sign_box_img">
                  <img :src="listsigns.img" :alt="listsigns.alt" />
                </div>
                <div class="sign_box_cont">
                  <h4>{{ listsigns.title }}</h4>
                  <p>{{ listsigns.datasign }}</p>
                </div>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Zodiac Sign end -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      listsigns: "",
    };
  },
  methods: {
    fetchSign() {
      this.$http.get("listasignosh").then((response) => {
        this.listsigns = response.body;
        console.log(response);
      });
    },
  },
  created() {
    this.fetchSign();
  },
};
</script>
