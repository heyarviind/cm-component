<template>
  <a
    class="card"
    href="#0"
    @click="hitClick($event)"
    @mouseover="hovered = true"
    @mouseleave="hovered = false"
  >
    <div class="header">
      <div class="content">
        <span style="text-align: right;">
          <img v-if="!hovered" src="../assets/heart-outline.svg" />
          <img v-else src="../assets/heart-filled.svg" />
        </span>
        <span
          ><Badge
            ><img src="../assets/trophy.svg" /> Premium Recipe</Badge
          ></span
        >
      </div>
      <div class="image"></div>
    </div>
    <div class="footer">
      <h1 class="title">
        {{ title }}
      </h1>

      <span>
        <Rating :value="rating" />
        <span class="ratingText">{{ totalRatings }} ratings</span>
      </span>

      <div class="moreInfo">
        <span>
          <Info icon="clock" :title="formatDuration(duration)" />
          <Info icon="calories" :title="getEnergyTitle(energy, energyUnit)" />
        </span>
        <span>
          <ColorBadge type="carbs" :value="`${carbs}g`" />
          <ColorBadge type="protein" :value="`${protein}g`" />
          <ColorBadge type="fats" :value="`${fats}g`" />
        </span>
      </div>
    </div>
  </a>
</template>

<script>
import Rating from "./Rating";
import Info from "./Info";
import ColorBadge from "./ColorBadge";
import Badge from "./Badge";

export default {
  components: {
    Rating,
    Info,
    ColorBadge,
    Badge,
  },
  props: {
    title: {
      type: String,
      default: "Low Carb Thai Chicken Curry With Coconut Cauliflower",
    },
    rating: {
      type: Number,
      default: 3.5,
    },
    totalRatings: {
      type: Number,
      default: 200,
    },
    duration: {
      type: Number,
      default: 80,
    }, // minutes
    energy: {
      type: Number,
      default: 1,
    }, // calories
    energyUnit: {
      type: String,
      default: "calories",
    },
    carbs: {
      type: Number,
      default: 20,
    },
    protein: {
      type: Number,
      default: 16,
    },
    fats: {
      type: Number,
      default: 6,
    },
  },
  data: () => ({
    hovered: false,
  }),
  methods: {
    hitClick(event) {
      event.preventDefault();
    },
    getEnergyTitle(calories, unit) {
      if (unit == "calories") {
        return `${calories} Calories`;
      } else {
        return `${(calories * 4.184).toFixed(1)} kJ`;
      }
    },
    formatDuration(minutes) {
      if (minutes > 60) {
        const totalHours = Math.floor(minutes / 60);
        const totalMinutes = minutes % 60;

        return `${totalHours} hr ${totalMinutes} min`;
      } else {
        return `${minutes} min`;
      }
    },
  },
};
</script>

<style>
/* reset */
h1,
h2,
h3,
h4 {
  margin: 0;
  padding: 0;
}

* {
  box-sizing: border-box;
}

.text-sm {
  font-size: 12px;
  color: #393c40;
}

.card {
  height: 318px;
  width: 343px;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  background: #ffffff;
  box-shadow: 0px 13px 35px rgba(0, 30, 47, 0.1);
  font-family: "proxima-nova", sans-serif;
  text-align: left;
}

.card:hover .header .image {
  opacity: 0.8;
}

a.card {
  color: #0c0c0a;
  text-decoration: none;
}

.card .header {
  height: 200px;
  position: relative;
  display: flex;
  /* padding: 16px; */
}
.card .header .content {
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
  z-index: 1;
  position: absolute;
  width: 100%;
  height: 100%;
  padding: 16px;
}

.card .header .image {
  transition: all 0.3s ease;
  background-image: linear-gradient(
      0deg,
      rgba(26, 29, 34, 0.79) 0%,
      rgba(22, 27, 35, 0.2) 29%
    ),
    url("https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80");
  background-size: cover;
  background-position: center;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  max-height: 200px;
  z-index: 0;
}

.card .footer {
  padding: 8px 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.card .footer .ratingText {
  font-size: 14px;
  color: #1ca677;
  margin-left: 8px;
}

.card .footer .title {
  font-size: 18px;
  line-height: 20px;
  font-weight: 700;
  margin-bottom: 16px;
  -webkit-line-clamp: 2;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.card .footer .moreInfo {
  margin-top: 4px;
  display: flex;
  justify-content: space-between;
}
</style>
