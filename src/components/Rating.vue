<template>
  <span>
    <Star
      :state="getState(index)"
      v-for="(x, index) in maxRating"
      :key="`star-${x}`"
    />
  </span>
</template>

<script>
import Star from "./Star";

export default {
  props: {
    value: {
      default: 0,
    },
  },
  components: {
    Star,
  },
  data: () => ({
    maxRating: 5,
    arr: [],
  }),
  created() {
    if (this.value >= 0 && this.value <= this.maxRating) {
      const decimalValue = this.value - Math.floor(this.value);
      let normalValue = Math.floor(this.value);

      for (let i = 1; i <= normalValue; i++) {
        this.arr.push(1);
        if (i == normalValue && decimalValue) {
          this.arr.push(decimalValue);
        }
      }
    }
  },
  methods: {
    getState(index) {
      if (this.arr[index] == 1) return "filled";
      if (this.arr[index] > 0 && this.arr[index] < 1) return "half";
      if (!this.arr[index]) return "empty";

      return "empty";
    },
  },
};
</script>
