import ButtonSecondary from "./";

export default {
  title: "Components/buttons/button-secondary",
  component: ButtonSecondary,
  argTypes: {
    size: { options: ["s", "m", "l"], control: { type: "select" } },
  },
};

const Template = (args) => ({
  components: { ButtonSecondary },
  setup() {
    return { args };
  },
  template: "<button-secondary v-bind='args'>Button</button-secondary>",
});

export const Story = Template.bind({});
Story.args = {
  size: "s",
};
Story.storyName = "default";
