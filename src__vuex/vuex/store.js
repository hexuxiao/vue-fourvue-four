import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const state = {
    count: 0
}
const mutations = {
    add() {
        state.count++
    },
    minus() {
        state.count--
    }
}
const actions = {
    odd(context) {
        if (state.count % 2 === 1) {
            context.commit('add')
        }
    },
    async (context) {
        setTimeout(() => {
            context.commit('add')
        }, 1000);
    }
}
const getters = {
    currentCount(state) {
        return state.count*10
    }
}
export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters
})