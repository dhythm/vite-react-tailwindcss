import { Meta, Story } from "@storybook/react";
import { Button } from "./Button";

export default {
  title: "Components/Button",
} as Meta;

const Template: Story = () => (
  <>
    <Button>Download</Button>
    <Button variant="contained">Download</Button>
  </>
);

export const Default = Template.bind({});
