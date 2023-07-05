import axios from "axios";

export default {
    namespaced: true,
    state: {
        path: 'https://api.themoviedb.org/3/tv/',
        tv: null
    },
    mutations: {
        getTvById(state, payload){
            state.tv = payload
        }
    },
    actions: {
        async getTvById({commit, state, rootState}, tvId){
            try {
                const res = await axios.get(`${state.path}${tvId}?api_key=${rootState.apiKey}&language=ru-RU&page=1`)
                const results = res.data
                commit('getTvById', results)
            } catch (error) {
                console.log('Ошибка при получении сериала по id...', error);
            }
        }
    },
    getters: {},
}