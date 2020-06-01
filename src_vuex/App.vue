<template>
  <div>
    <button @click="add">+</button>
    <button @click="minus">-</button>
    <button @click="odd">{{$store.state.count}}</button>
    <button @click="async">{{$store.state.count}}</button>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  methods: {
    add() {
      this.$store.dispatch("add");
    },
    minus() {
      this.$store.dispatch("minus");
    },
    odd() {
      this.$store.dispatch("odd");
    },
    async() {
      this.$store.dispatch("async");
    }
  }
};
</script>

<style scoped>
</style>
