<template>
  <a class="card" href="#0">
    <div class="header">
      <div class="content">
        <span>dd</span>
        <span><Button>Learn More</Button></span>
      </div>
      <div class="image"></div>
    </div>
    <div class="footer">
      <h1 class="title">
        Low Carb Thai Chicken Curry With Coconut Cauliflower Rice
      </h1>

      <span>
        <Rating />
        <span class="ratingText">200 ratings</span>
      </span>

      <div class="moreInfo">
        <span>
          <Info icon="clock" title="24 min" />
          <Info icon="calories" title="489 Calories" />
        </span>
        <span>
          <Protein color="red" value="20g" />
          <Protein color="blue" value="16g" />
          <Protein color="yellow" value="6g" />
        </span>
      </div>
    </div>
  </a>
</template>

<script>
import Rating from "./Rating";
import Info from "./Info";
import Protein from "./Protien";
import Button from "./Button";

export default {
  components: {
    Rating,
    Info,
    Protein,
    Button,
  },
};
</script>

<style scoped>
/* reset */
h1,
h2,
h3,
h4 {
  margin: 0;
  padding: 0;
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
  /* padding: 16px; */
}
.card .header .content {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  z-index: 1;
  position: absolute;
  top: 0;
  height: 0;
  left: 0;
  right: 0;
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
}

.card .footer .moreInfo {
  margin-top: 4px;
  display: flex;
  justify-content: space-between;
}
</style>
