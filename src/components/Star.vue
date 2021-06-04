<template>
  <span>
    <img v-if="state == 'filled'" src="../assets/star-filled.svg" />
    <img v-if="state == 'half'" src="../assets/star-half.svg" />
    <img v-if="state == 'empty'" src="../assets/star-empty.svg" />
  </span>
</template>

<script>
export default {
  props: {
    state: {
      type: String,
      default: "empty",
    },
  },
};
</script>
