import { Meta, Story } from "@storybook/react";
import { Stepper } from "./Stepper";

export default {
  title: "Components/Stepper",
} as Meta;

const Template: Story = () => (
  <div className="w-80">
    <Stepper />
  </div>
);

export const Default = Template.bind({});
