<template lang="pug">
.main-info(v-if="movie") 
    img(:src="imageFullUrl + movie.backdrop_path")
    .main-info-block() 
        .main-info-content
            .main-info-content-block
                h2 {{movie.title}}   
                p {{movie.overview}} 
                p.date
                    span {{new Date (movie.release_date).getFullYear()}},
                    span(v-for="genre in movie.genres" :key="genre.id") {{genre.name}}
                    
                .actors
                    Actors(:type="'/movie/'" :id="movie.id" count="6")
</template>
<script>
import { mapActions, mapState } from "vuex";
export default {
    computed: {
        ...mapState(['imageFullUrl']),
        ...mapState( 'movie', ['movie']),
    },
    methods: {
        ...mapActions('movie', ['getMovieById'])
    },
    async mounted() {
        this.getMovieById(this.$route.params.id)
    },
}
</script>
<style lang="scss" scoped>
    .main-info{
        height: 700px;
        margin-top: 100px;
        >img{
            position: absolute;
            top: 0;
            right: 0;
            width: 60%;
            height: 100%;
            cursor: default;
            z-index: -1;
        }
    }

</style>