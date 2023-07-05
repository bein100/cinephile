<template lang="pug">
footer.footer 
    ul.footer-social
        li(v-for="link in links" :key="link.src")
            a(href="#")
                img(:src="require('@/assets/img/' + link.src)", alt="alt")
    p © 2022 CINEPHILE. Может содержать информацию, не предназначенную для несовершеннолетних <br> <br> Данные получены с сайта themoviedb.org
    img(src="@/assets/img/footer-logo.svg", alt="alt")
</template>
<script>
export default {
    data() {
        return {
            links: [
                {src: 'tg.svg'},
                {src: 'vk.svg'},
                {src: 'f.svg'},
                {src: 'i.svg'},
                {src: 'tk.svg'},
                {src: 'yt.svg'},
                {src: 'tw.svg'},
                {src: 'l.svg'},
            ]
        }
    },
}
</script>
<style lang="scss">
    
</style>