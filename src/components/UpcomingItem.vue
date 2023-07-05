<template lang="pug">
Transition(name="main-upcoming-item" mode="out-in")
    .main-upcoming-item(v-if="idx === slideView") 
        img(:src="imageFullUrl + movie.backdrop_path", alt="alt")
        .main-upcoming-item-content
            .container
                h1 {{movie.title}}
                p {{movie.overview}}
                BtnMore(
                    :id="movie.id"
                )
        .main-upcoming-item-next(@click="$emit('nextSlide')")
            img(:src="imageFullUrl + next.backdrop_path", alt="alt")
            .main-upcoming-item-next-content 
                span.next Следующий
                span.title {{next.title}}
            .main-upcoming-item-next-line
</template>
<script>
import { mapState } from "vuex";
export default {
    props:{
        movie: Object,
        idx: Number,
        slideView: Number,
        next: Object
    },
        computed: {
            ...mapState(['imageFullUrl'])
        },
}
</script>
<style lang="scss">
    
</style>