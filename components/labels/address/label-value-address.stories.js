import LabelValueAddress from "./";

export default {
  title: "Components/labels/label-values-address",
  component: LabelValueAddress,
  argTypes: {
    address: { control: { type: "object" } },
  },
};

const Template = (args) => ({
  components: { LabelValueAddress },
  setup() {
    return { args };
  },
  template: "<label-value-address v-bind='args'/>",
});
export const Story = Template.bind({});
Story.args = {
  label: "Label",
  address: {},
};
Story.storyName = "default";
