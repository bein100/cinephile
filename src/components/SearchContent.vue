<template lang="pug">
router-link(to="#").main-content-item(v-if="item.poster_path")
    img(:src="imageFullUrl + item.poster_path")
</template>
<script>
import { mapState } from "vuex";
export default {
    props: ['item'],
    computed: {
        ...mapState(['imageFullUrl'])
    },
}
</script>
<style lang="scss">
    
</style>