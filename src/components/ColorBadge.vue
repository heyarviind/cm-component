<template>
  <span class="protien">
    <span>
      <span :class="`dot ${type}`"></span>
    </span>
    <span class="text-sm">{{ value }}</span>
  </span>
</template>

<script>
export default {
  props: ["type", "value"],
};
</script>

<style scoped>
.protien {
  display: inline-flex;
  align-items: center;
  margin-left: 8px;
}

.dot {
  height: 6px;
  width: 6px;
  border-radius: 12px;
  display: block;
  margin-right: 4px;
}

.dot.carbs {
  background-color: #f94642;
}

.dot.protein {
  background-color: #3177bb;
}

.dot.fats {
  background-color: #fda120;
}
</style>
