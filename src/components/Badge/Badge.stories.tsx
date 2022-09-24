import { Meta, Story } from "@storybook/react";
import { Badge } from "./Badge";

export default {
  title: "Components/Badge",
} as Meta;

const Template: Story = () => (
  <>
    <Badge>Bug</Badge>
    <Badge variant="filled">Bug</Badge>
  </>
);

export const Default = Template.bind({});
