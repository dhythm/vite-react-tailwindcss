import { Meta, Story } from "@storybook/react";
import { Dropdown } from "./Dropdown";

export default {
  title: "Components/Dropdown",
} as Meta;

const Template: Story = () => <Dropdown />;

export const Default = Template.bind({});
