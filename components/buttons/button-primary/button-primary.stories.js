import ButtonPrimary from "./";

export default {
  title: "Components/buttons/button-primary",
  component: ButtonPrimary,
  argTypes: {
    size: { options: ["s", "m", "l"], control: { type: "select" } },
  },
  parameters: {
    docs: {
      description: {
        component: "Story of primary button",
      },
    },
  },
};

const Template = (args) => ({
  components: { ButtonPrimary },
  setup() {
    return { args };
  },
  template: "<button-primary v-bind='args'>Button</button-primary>",
});

export const Story = Template.bind({});
Story.args = {
  size: "s",
};
Story.storyName = "default";
