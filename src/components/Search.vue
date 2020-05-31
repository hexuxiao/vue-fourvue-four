<template>
  <section class="jumbotron">
    <h3 class="jumbotron-heading">Search Github Users</h3>
    <div>
      <input type="text" placeholder="enter the name you search" v-model="searchName" />
      <button @click="searchAjax">Search</button>
    </div>
  </section>
</template>

<script type="text/ecmascript-6">
export default {
  data() {
    return {
      searchName: ""
    };
  },
  methods:{
    searchAjax(){
      this.$bus.$emit('searchAjax',this.searchName)
    }
  }
};
</script>

<style scoped>
</style>
