import { mount } from "@vue/test-utils";
import PremiumRecipeCard from "./../../src/components/PremiumRecipeCard.vue";

describe("PremiumRecipeCard.vue", () => {
  const wrapper = mount(PremiumRecipeCard);
  /* Tests go here */
  it("test calorie conversion", () => {
    expect(wrapper.vm.getEnergyTitle(100, "calories")).toBe("100 Calories");
    expect(wrapper.vm.getEnergyTitle(150, "kilojoules")).toBe("627.6 kJ");
  });

  it("test minutes conversion", () => {
    expect(wrapper.vm.formatDuration(100)).toBe("1 hr 40 min");
    expect(wrapper.vm.formatDuration(25)).toBe("25 min");
  });
});
