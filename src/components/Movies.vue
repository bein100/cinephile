<template lang="pug">
section.main-media
    router-link(to="/films") 
        span Фильмы
        img(src="@/assets/img/arrow.svg", alt="alt")
    Swiper(
        :modules="modules"
        :space-between="25"
        :navigation="true"
        :breakpoints="swiperOptions.breakpoints"
    )
        SwiperSlide(
            class="main-media-item"
            v-for="(movie, idx) in popularMovies" 
            :key="movie.id"
            @click="getMovie(movie, idx)"
        )
            img(:src="imageUrl + movie.poster_path", alt="alt")
        SwiperSlide(
            class="main-media-item"
        )
            router-link(to="/films")
                img(src="@/assets/img/arrow.svg", alt="alt").arrow
                span Фильмы
    InfoBlock(
        :selectedId="selectedId"
        :selectedMovie="selectedMovie"
        :index="index"
        page='/movie/'    

    )            
</template>
<script>
import InfoBlock from '@/components/InfoBlock.vue'
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
                        slidesPerView: 4
                    },
                    1450: {
                        slidesPerView: 5
                    },
                }
            },
            selectedId: null,
            selectedMovie: null,
            index: null
        }
    },
    components: { Swiper, SwiperSlide, InfoBlock},
    methods: {
        ...mapActions('popularMovies', ['getPopular']),
        ...mapActions('movie', ['getMovieById']),
        async getMovie(movie, idx){
            this.selectedId = movie.id 
            this.selectedMovie = null 
            this.index = idx 
            await this.getMovieById(this.selectedId)
            this.selectedMovie = this.movie
        }
    },
    computed: {
        ...mapState('popularMovies', ['popularMovies']),
        ...mapState('movie', ['movie']),
        ...mapState(['imageUrl']),
    },
    mounted() {
        this.getPopular()
    },
}
</script>
<style lang="scss">
    
</style>