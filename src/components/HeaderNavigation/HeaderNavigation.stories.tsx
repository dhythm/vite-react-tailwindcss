import { Meta, Story } from "@storybook/react";
import { HeaderNavigation } from "./HeaderNavigation";

export default {
  title: "Components/HeaderNavigation",
} as Meta;

const Template: Story = () => <HeaderNavigation />;

export const Default = Template.bind({});
