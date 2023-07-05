<template lang="pug">
router-link(:to="page + id" class="more")
    img(src="@/assets/img/bars.svg", alt="alt")
    span Подробнее
</template>
<script>
export default {
    props: {
        id: Number,
        page: {
            type: String,
            default: '/movie/'
        }
    }
}
</script>
<style lang="scss">
    
</style>