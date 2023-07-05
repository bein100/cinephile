<template>
<main class="main">
    <Upcoming />
    <Movies />
    <Tvs />
    <TopRated />
</main>
</template>
<script>
import Upcoming from '@/components/Upcoming.vue'
import Movies from '@/components/Movies.vue'
import Tvs from '@/components/Tvs.vue'
import TopRated from '@/components/TopRated.vue'
export default {
  components: { Upcoming, Movies, Tvs, TopRated },
    
}
</script>
<style lang="">
    
</style>