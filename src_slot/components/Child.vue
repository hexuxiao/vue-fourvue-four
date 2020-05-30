<template>
  <div>
    <h1>固定不变的</h1>
    <slot></slot>

    <slot name="shang"></slot>
    <slot name="xia"></slot>
    <ul>
      <li v-for="person in persons" :key="person.id">
        <slot name="list" :person='person'>
          {{person.name}}
        </slot>
      </li>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data() {
    return {
      persons: [
        { id: 1, name: "秦霄贤" },
        { id: 2, name: "孙九香" }
      ]
    };
  }
};
</script>

<style scoped>
</style>
