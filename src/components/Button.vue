<template>
  <button type="button">
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
</style>
