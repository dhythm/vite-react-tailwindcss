import { Meta, Story } from "@storybook/react";
import { Tabs } from "./Tabs";

export default {
  title: "Components/Tabs",
} as Meta;

const Template: Story = () => (
  <Tabs
    tabs={["Settings", "Messages", "Archive", "Notifications"]}
    tabIndex={0}
  />
);

export const Default = Template.bind({});
