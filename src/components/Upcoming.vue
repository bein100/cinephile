<template lang="pug">
.main-upcoming(v-if="upcoming")
    UpcomingItem(v-for="(movie, idx) in getUpcomingArray"
    :key="movie.id"
    :movie="movie"
    :idx="idx"
    :slideView="slideView"
    :next="upcoming[idx + 1 == upcoming.length ? 0 : idx + 1]"
    @nextSlide="nextSlide"
    )
</template>
<script>
import UpcomingItem from '@/components/UpcomingItem.vue'
import {mapGetters, mapActions} from 'vuex'
export default {
    data() {
        return {
            upcoming: null,
            slideView: 0,
            timeout: null
        }
    },
    components: {UpcomingItem},
    computed: {
        ...mapGetters('upcoming', ['getUpcomingArray'])
    },
    methods: {
        ...mapActions('upcoming', ['getUpcoming']),
        slide(){
            if (this.upcoming.length - 1 == this.slideView) {
                this.slideView = 0
            }else{
                this.slideView++
            }
            this.timeout = setTimeout(this.slide, 10000)
        },
        nextSlide(){
            clearTimeout(this.timeout)
            this.slide()
        }
    },
    async mounted() {
        await this.getUpcoming()
        this.upcoming = this.getUpcomingArray
        this.timeout = setTimeout(this.slide, 10000)
    },
}
</script>
<style lang="scss">
    
</style>