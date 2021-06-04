<template>
  <span class="badge">
    <slot />
  </span>
</template>

<style scoped>
.badge {
  padding: 4px 8px;
  border-radius: 50px;
  display: inline-flex;
  border: none;
  color: #fff;
  align-items: center;
  font-size: 12px;
  background-color: rgba(255, 255, 255, 0.4);
}

.badge img {
  margin-right: 4px;
}
</style>
