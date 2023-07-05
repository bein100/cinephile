import axios from "axios";

export default {
    namespaced: true,
    state: {
        upcomingPath: 'https://api.themoviedb.org/3/movie/upcoming',
        upcoming: null
    },
    mutations: {
        getUpcoming(state, payload){
            state.upcoming = payload 
        }
    },
    actions: {
        async getUpcoming({commit, state, rootState}){
            try {
                const res = await axios(`${state.upcomingPath}?api_key=${rootState.apiKey}&language=ru-RU&page=1`)
                const results = res.data.results
                const arrayRes = results.filter(movie => movie.backdrop_path != null && movie.overview != '')
                commit('getUpcoming', arrayRes)
            } catch (error) {
                console.log(error);
            }
        }
    },
    getters: {
        getUpcomingArray:(state) => state.upcoming
    }
}