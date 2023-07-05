<template lang="pug">
.main-info-content-actors
    .main-info-content-actor(v-for="actor in actors" :key="actor.id")
        img(:src="imageUrl + actor.profile_path", alt="alt")
        span {{actor.name}} 
</template>
<script>
import { mapActions, mapState } from "vuex";
export default {
    data() {
        return {
            actors: null
        }   
    },
    props: ['type', 'id', 'count'],
    methods: {
        ...mapActions('actors', ['getActors'])
    },
    computed: {
        ...mapState(['imageUrl']),
        getCountActors() {
            const type = this.type == '/movie/' ? 'getMovieActors' : 'getTvActors'
            return this.$store.getters[`actors/${type}`](this.count)
        }
    },
    async mounted() {
        await this.getActors({id: this.id, type: this.type})
        this.actors = this.getCountActors
    },
}
</script>
<style lang="scss">
    
</style>