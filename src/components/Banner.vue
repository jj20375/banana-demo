<template>
    <owl-carousel :items="1"
                  :autoplay="true"
                  :loop="true"
                  :dots="true"
                  :margin="10"
                  :stagePadding="0"
                  :autoplayTimeout="1500"
                  :center="false"
                  :nav="false">
            <div v-for="(item,index) in banners"
                 class="relative"
                 :key="index">
                <div class="bg-gradient-to-t from-gray-900 absolute w-full z-10 h-full">
                </div>
                <div class="w-full">
                    <img :src="item.imgSrc"
                         alt="">
                </div>
            </div>
    </owl-carousel>
</template>

<script>
import owlCarousel from "vue-owl-carousel2";
import Banner1 from "../../public/img/banner/banner1.jpg";
export default {
    components: {
        owlCarousel
    },
    data() {
        return {
            banners: [
                {
                    imgSrc: Banner1
                }
            ]
        };
    }
};
</script>
