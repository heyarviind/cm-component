import { action } from "@storybook/addon-actions";
import { withKnobs, number, text, select } from "@storybook/addon-knobs";

import PremiumRecipeCard from "../src/components/PremiumRecipeCard.vue";

export default {
  title: "PremiumRecipeCard",
  component: PremiumRecipeCard,
  decorators: [withKnobs],
};

export const Default = () => ({
  components: { PremiumRecipeCard },
  props: {
    title: {
      default: text(
        "Title",
        "Low Carb Thai Chicken Curry With Coconut Cauliflower"
      ),
    },
    rating: {
      default: number("Rating", 3.5),
    },
    totalRatings: {
      default: number("Total Ratings", 200),
    },
    duration: {
      default: number("Duration", 80), // minutes
    },
    energy: {
      default: number("Energy", 200),
    }, // calories
    energyUnit: {
      default: select("Energy Unit", {
        Calories: "calories",
        kilojoules: "kilojoules",
      }),
    },

    carbs: {
      default: number("Carbs", 20),
    },
    protein: {
      default: number("Protein", 16),
    },
    fats: {
      default: number("Fats", 6),
    },
  },
  template: `<PremiumRecipeCard 
      :title="title" 
      :rating="rating" 
      :totalRatings="totalRatings" 
      :duration="duration" 
      :energy="energy" 
      :energyUnit="energyUnit" 
      :carbs="carbs"
      :protein="protein"
      :fats="fats"
      
      @click="action" />`,
  methods: { action: action("clicked") },
});
