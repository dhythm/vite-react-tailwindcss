import { Meta, Story } from "@storybook/react";
import { ButtonGroup } from "./ButtonGroup";

export default {
  title: "Components/ButtonGroup",
} as Meta;

const Template: Story = () => <ButtonGroup />;

export const Default = Template.bind({});
