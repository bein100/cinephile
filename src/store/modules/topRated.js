import axios from "axios";

export default {
    namespaced: true,
    state: {
        path: 'https://api.themoviedb.org/3/movie/top_rated?',
        topRated: null
    },
    mutations: {
        getPopular(state, payload){
            state.topRated = payload
        }
    },
    actions: {
        async getPopular({commit, state, rootState}){
            try {
                const res = await axios.get(`${state.path}language=ru-RU&api_key=${rootState.apiKey}&page=1`)
                const results = res.data.results
                const top10 = []
                results.forEach(item => {
                    if (top10.length < 10) top10.push(item)
                });
                commit('getPopular', top10)
            } catch (error) {
                console.log('Ошибка при олучении топовых фильмов', error);
            }
        }
    },
    getters: {},
}