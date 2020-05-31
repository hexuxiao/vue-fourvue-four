import Vue from 'vue'
import App from '@/App'
// import "@babel/polyfill";
Vue.config.productionTip = false

new Vue({
    beforeCreate() {
        Vue.prototype.$bus = this
    },
    el: '#root',
    render: h => h(App)
})