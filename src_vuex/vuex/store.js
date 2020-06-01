import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

//状态 存放数据
const state = {
    count: 0
}
//直接修改数据的行为
const mutations = {
    add(state) {
        state.count++;
    },
    minus(state) {
        state.count--;
    },
}
//行为中对应的回调函数(内部逻辑)
const actions = {
    //用户点击 触发回调 回调参数为执行上下文对象 系统分装好的 提交给上面的方法去执行
    add(context) {
        context.commit('add')
    },
    minus(context) {
        context.commit('minus')
    },
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
//根据状态数据,计算出来的数据
const getters = {

}
export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters
})