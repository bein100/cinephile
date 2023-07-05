<template lang="pug">
section.main-rate
    h2 Топ
        span 10
    Swiper(
        :modules="modules"
        :space-between="25"
        :navigation="true"
        :breakpoints="swiperOptions.breakpoints"
    )
        SwiperSlide(
            class="main-rate-item"
            v-for="(item, idx) in topRated" :key="item.id"
        )
            .main-rate-info 
                span {{idx + 1}}
                img(:src="imageUrl + item.poster_path", alt="alt")
</template>
<script>
import { mapActions, mapState } from "vuex";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation } from "swiper";
import "swiper/scss";
import "swiper/scss/navigation";
export default {
    data() {
        return {
            modules: [Navigation],
            swiperOptions: {
                breakpoints: {
                    320: {
                        slidesPerView: 1
                    },
                    576: {
                        slidesPerView: 2
                    },
                    900: {
                        slidesPerView: 3
                    },
                    1200: {
                        slidesPerView: 3
                    },
                    1450: {
                        slidesPerView: 3
                    },
                }
            },
        }
    },
    components: { Swiper, SwiperSlide, },
    methods: {
        ...mapActions('topRated', ['getPopular']),
    },
    computed: {
        ...mapState('topRated', ['topRated']),
        ...mapState(['imageUrl']),
    },
    mounted() {
        this.getPopular()
    },
}
</script>
<style lang="scss">
    
</style>