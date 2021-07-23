import { mount } from "@vue/test-utils";
import { defineComponent, h } from "vue";
import LabelValue from "./index.vue";

test("Mount label-value", () => {
  const wrapper = mount(LabelValue, {
    props: {
      label: "Label",
      value: "Value",
    },
  });
  expect(wrapper.classes()).toContain("label-value");
});
