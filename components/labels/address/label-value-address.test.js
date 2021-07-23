import { mount } from "@vue/test-utils";
import LabelValueAddress from "./index.vue";

describe("label-value-address", () => {
  it("Renders the label-value-address component", () => {
    const wrapper = mount(LabelValueAddress, {
      props: { label: "", address: {} },
    });
    expect(wrapper.classes()).toContain("label-value--address");
  });
});
