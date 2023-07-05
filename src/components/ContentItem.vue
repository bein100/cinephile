<template lang="pug">
router-link(:to="`/${content}/${item.id}`" class="main-content-item")
    img(:src="imageFullUrl + item.poster_path", alt="alt")
</template>
<script>
import { mapState } from "vuex";
export default {
    props: ['content', 'item'],
    computed: {
        ...mapState(['imageFullUrl'])
    },    
}
</script>
<style lang="scss">
    
</style>