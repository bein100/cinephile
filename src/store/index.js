import { createStore } from 'vuex'
import upcoming from '@/store/modules/upcoming'
import popularMovies from '@/store/modules/popularMovies'
import movie from '@/store/modules/movie'
import popularTvs from '@/store/modules/popularTvs'
import tv from '@/store/modules/tv'
import topRated from '@/store/modules/topRated'
import searching from '@/store/modules/searching'
import actors from '@/store/modules/actors'

export default createStore({
  state: {
    apiKey: '64310f670d4161d7fb132482afa7e178',
    imageFullUrl: 'https://image.tmdb.org/t/p/original/',
    imageUrl: 'https://image.tmdb.org/t/p/w500/',
  },
  modules: {
    popularMovies, upcoming, movie, popularTvs, tv, topRated, searching, actors
  }
})
