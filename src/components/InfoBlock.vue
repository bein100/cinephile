<template lang="pug">
.main-info(:class="{active: selectedId != null}") 
    img(v-if="selectedMovie" src="@/assets/img/Close.svg", alt="alt" @click="selectedId = selectedMovie = null")
    .main-info-block(v-if="selectedMovie") 
        img(:src="imageFullUrl + selectedMovie.backdrop_path", alt="alt" v-if="selectedMovie.backdrop_path")
        img(src="@/assets/img/nophoto.png", alt="alt" v-else)
        .main-info-content
            .main-info-content-block    
                h2 {{selectedMovie.title || selectedMovie.name}}
                p {{selectedMovie.overview || 'Описание отсутствует...'}}
                p.date
                    span {{new Date (selectedMovie.release_date).getFullYear() || new Date (selectedMovie.first_air_date).getFullYear()}},
                    span(v-for="genre in selectedMovie.genres" :key="genre.id") {{genre.name}}
                    span(v-if="selectedMovie.runtime") {{Math.floor(selectedMovie.runtime / 60) + 'h' + (selectedMovie.runtime - (Math.floor(selectedMovie.runtime / 60) * 60)) + 'm'}}
                    span(v-else) {{selectedMovie.number_of_seasons + 'S ' + selectedMovie.number_of_episodes+ 'E'}}
                .actors
                    Actors(:type="page" :id="selectedMovie.id" count="4")
                BtnMore(
                    :id="selectedMovie.id"
                    :page="page"
                )
</template>
<script>
import { mapState } from "vuex";
export default {
    props: ['selectedId', 'selectedMovie', 'index', 'page'],
    computed: {
        ...mapState(['imageFullUrl'])
    },
}
</script>
<style lang="scss">
    
</style>