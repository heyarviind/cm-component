<template>
  <span class="info"
    ><img :src="`/img/${icon}.svg`" />
    <span class="text-sm">{{ title }}</span></span
  >
</template>

<script>
export default {
  props: ["icon", "title"],
};
</script>

<style scoped>
.info {
  display: inline-flex;
  align-items: center;
  margin-right: 16px;
}

.info img {
  margin-right: 8.3px;
}
</style>
