import { Meta, Story } from "@storybook/react";
import { Stepper } from "./Stepper";

export default {
  title: "Components/Stepper",
} as Meta;

const Template: Story = () => <Stepper />;

export const Default = Template.bind({});
