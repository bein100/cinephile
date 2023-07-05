import axios from "axios";

export default {
    namespaced: true,
    state: {
        path: 'https://api.themoviedb.org/3',
        actorsMovie: null,
        actorsTv: null
    },
    mutations: {
        getMovieActors(state, payload){
            state.actorsMovie = payload
        },
        getTvActors(state, payload){
            state.actorsTv = payload
        }
    },
    actions: {
        async getActors({commit, state, rootState}, info){
            let {id, type} = info
            try {
                const res = await axios.get(`${state.path}${type}${id}/credits?api_key=${rootState.apiKey}&language=ru-RU&page=1`)
                const data = res.data.cast
                if (type == '/movie/') commit('getMovieActors', data)
                else commit('getTvActors', data)
            } catch (error) {
                console.log('Ошибка при получении состав актеров...', error);
            }
        }
    },
    getters: {
        getMovieActors: (state) => (count) => {
            return state.actorsMovie.slice(0, count)
        },
        getTvActors: (state) => (count) => {
            return state.actorsTv.slice(0, count)
        },
    },
}