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
      default: 3.5,
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
    this.hydrateRating();
  },
  methods: {
    hydrateRating() {
      if (this.value >= 0 && this.value <= this.maxRating) {
        const decimalValue = this.value - Math.floor(this.value);
        let normalValue = Math.floor(this.value);

        // make the arr empty if the value changes in storybook
        this.arr = [];

        for (let i = 1; i <= normalValue; i++) {
          this.arr.push(1);
          if (i == normalValue && decimalValue) {
            this.arr.push(decimalValue);
          }
        }
      }
    },
    getState(index) {
      if (this.arr[index] == 1) return "filled";
      if (this.arr[index] > 0 && this.arr[index] < 1) return "half";
      if (!this.arr[index]) return "empty";

      return "empty";
    },
  },
  // need to watch the rating value, as this can be changed in storybook
  // this rating component is dependent on arr variable so it has to be
  // updated on every prop change
  watch: {
    value: function() {
      this.hydrateRating();
    },
  },
};
</script>
