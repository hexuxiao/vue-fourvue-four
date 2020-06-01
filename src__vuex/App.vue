<template>
  <div>
    <button @click="add">+</button>
    <button @click="minus">-</button>
    <button @click="odd">{{count}}</button>
    <button @click="async">{{count}}</button>
    <p>{{currentCount}}</p>
  </div>
</template>

<script type="text/ecmascript-6">
import {mapActions,mapGetters,mapMutations} from 'vuex'
export default {
  methods: {
    // add() {
    //   this.$store.commit("add");
    // },
    // minus() {
    //   this.$store.commit("minus");
    // },
    ...mapMutations(['add','minus']),//扩展运算符 解包对象 返回一个对象，对象中的两个方法
    // odd() {
    //   this.$store.dispatch("odd");
    // },
    // async() {
    //   this.$store.dispatch("async");
    // }
    ...mapActions(['odd','async'])
  },
  computed: {
    count(){
      return this.$store.state.count
    },
    currentCount(){
      return this.$store.getters.currentCount
    }
  },
};
</script>

<style scoped>
</style>
