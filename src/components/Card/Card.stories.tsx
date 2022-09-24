import { Meta, Story } from "@storybook/react";
import { Card } from "./Card";

export default {
  title: "Components/Card",
} as Meta;

const Template: Story = () => <Card />;

export const Default = Template.bind({});
