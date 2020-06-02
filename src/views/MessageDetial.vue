<template>
  <ul class="list-group">
    <!-- <li class="list-group-item">msgId:{{this.$route.params.msgId}}</li>
    <li class="list-group-item">msgContent:{{this.$route.query.msgContent}}</li>-->
    <li class="list-group-item">msgId:{{msgId}}</li>
    <li class="list-group-item">msgContent:{{msgContent}}</li>
    <li class="list-group-item">msgTitle:{{title}}</li>
  </ul>
</template>

<script type="text/ecmascript-6">
let msgTitles = [
  { id: 1, title: "msg001" },
  { id: 2, title: "msg002" },
  { id: 3, title: "msg003" }
];
export default {
  props: ["msgId", "msgContent"],
  data() {
    return {
      title: ""
    };
  },
  mounted() {
    this.show();
  },
  watch: {
    $route(newVal, oldVal) {
      this.show();
    }
  },
  methods: {
    show() {
      setTimeout(() => {
        this.title = msgTitles.find(item => item.id === this.msgId * 1).title;
      }, 1000);
    }
  }
};
</script>

<style scoped>
</style>
