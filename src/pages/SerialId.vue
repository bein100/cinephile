<template lang="pug">
.main-info(v-if="tv") 
    img(:src="imageFullUrl + tv.backdrop_path" v-if="tv.backdrop+path")
    img(src="@/assets/img/nophoto.png", alt="alt" v-else)
    .main-info-block() 
        .main-info-content
            .main-info-content-block
                h2 {{tv.name}}   
                p {{tv.overview || 'Описание отсутствует...'}}
                p.date
                    span {{new Date (tv.first_air_date).getFullYear()}},
                    span(v-for="genre in tv.genres" :key="genre.id") {{genre.name}}
                    
                .actors
                    Actors(:type="'/tv/'" :id="tv.id" count="6")
</template>
<script>
import { mapActions, mapState } from "vuex";
export default {
    computed: {
        ...mapState(['imageFullUrl']),
        ...mapState( 'tv', ['tv']),
    },
    methods: {
        ...mapActions('tv', ['getTvById'])
    },
    async mounted() {
        this.getTvById(this.$route.params.id)
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