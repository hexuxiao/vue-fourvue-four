<template>
  <div>
    <Child>
      <template>hello</template>
      <template slot="shang">
        <h2>德云社</h2>
        <p>孟鹤堂</p>
        <p>周久良</p>
      </template>
      <span slot-scope="hello" v-show="isShow" slot="list">
        √{{hello.person.name}}
      </span>
    </Child>
    <Child>
      <template slot="xia">
        <h2>歌星</h2>
        <p>邓紫棋</p>
        <p>毛不易</p>
      </template>
    </Child>
  </div>
</template>

<script type="text/ecmascript-6">
import Child from "./components/Child";
export default {
  components: {
    Child
  },
  data() {
    return {
      isShow: true
    };
  }
};
</script>

<style scoped>
</style>
