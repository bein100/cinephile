import axios from "axios";

export default {
    namespaced: true,
    state: {
        path: 'https://api.themoviedb.org/3/movie/popular?',
        popularMovies: null
    },
    mutations: {
        getPopular(state, payload){
            state.popularMovies = payload
        }
    },
    actions: {
        async getPopular({commit, state, rootState}, page = 1){
            try {
                const res = await axios.get(`${state.path}language=ru-RU&api_key=${rootState.apiKey}&page=${page}`)
                const results = res.data.results
                commit('getPopular', results)
            } catch (error) {
                console.log('Ошибка при олучении популярных фильмов', error);
            }
        }
    },
    getters: {},
}