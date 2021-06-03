<template>
  <button type="button" :class="`${size == 'small' ? 'button-small' : ''}`">
    <slot />
  </button>
</template>

<style scoped>
button {
  padding: 19px;
  border-radius: 50px;
  display: inline-flex;
  border: none;
  color: #fff;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.4);
}

button img {
  margin-right: 4px;
}

.button-small {
  padding: 4px 8px;
  font-size: 12px;
}
</style>

<script>
export default {
  props: ["size"],
};
</script>
