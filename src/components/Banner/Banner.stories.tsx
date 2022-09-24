import { Meta, Story } from "@storybook/react";
import { Banner } from "./Banner";

export default {
  title: "Components/Banner",
} as Meta;

const Template: Story = () => <Banner />;

export const Default = Template.bind({});
