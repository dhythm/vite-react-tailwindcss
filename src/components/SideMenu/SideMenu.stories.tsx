import { Meta, Story } from "@storybook/react";
import { SideMenu } from "./SideMenu";

export default {
  title: "Components/SideMenu",
} as Meta;

const Template: Story = () => (
  <div className="w-80">
    <SideMenu />
  </div>
);

export const Default = Template.bind({});
