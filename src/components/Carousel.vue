<template>
    <div>
        <carousel
                :perPage="1"
                :autoplay="true"
                :paginationEnabled="false"
                :loop="true"
                :autoplayTimeout="8000"
                :mouseDrag="false"
                :space-padding="0"
        >
            <slide v-for="(itemcaroussel, index) in itcaroussel" :key="index">
                <img :src="itemcaroussel.img" :alt="itemcaroussel.alt"/>
            </slide>
        </carousel>
    </div>
</template>

<script>
    import {Carousel, Slide} from "vue-carousel";

    export default {
        data() {
            return {
                itcaroussel: "",
            };
        },

        methods: {
            fetchDataCarousel() {
                this.$http.get("caroussel").then((response) => {
                    this.itcaroussel = response.body;
                    console.log(response);
                });
            },
        },

        created() {
            this.fetchDataCarousel();
        },
        components: {
            Carousel,
            Slide,
        },
        props: ["itemcaroussel"],
    };
</script>
