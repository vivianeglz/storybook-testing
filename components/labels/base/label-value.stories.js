import LabelValue from "./";

export default {
  title: "Components/labels/label-values",
  component: LabelValue,
};

const Template = (args) => ({
  components: { LabelValue },
  setup() {
    return { args };
  },
  template: "<label-value v-bind='args'/>",
});
export const Story = Template.bind({});
Story.args = {
  label: "Label",
  value: "Value",
};
Story.storyName = "default";
