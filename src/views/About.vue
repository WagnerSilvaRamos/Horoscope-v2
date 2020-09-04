<template>
  <div>
    <div id="about_us" class="about_section">
      <div class="container-fluid">
        <div class="row">
          <div class="col-sm-6">
            <div class="about_text">
              <h2>{{intro.title}}</h2>
              <p>{{intro.description}}</p>
              <p>{{intro.description}}</p>
              <h3>Contact Us</h3>
              <h2 class="about_contact"><i class="fa fa-volume-control-phone"></i> {{intro.phone}}</h2>
              <router-link to="/about" class="btn" tag="a">Read More</router-link>
            </div>
          </div>
          <div class="col-sm-6">
            <div class="about_images">
              <img :src=intro.img alt="About"/>
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
        intro: {
          title:"Astrology revels the will of god",
          description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. or randomised words which don't look even slightly believable.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
          phone: "+55 011 01015566",
          img: "http://www.wagneramos.com.br/teste/assets-horoscope/about_img.jpg"
        }
      }
    },


    props: ["item", "title"]
  }
</script>
