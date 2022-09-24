import { Meta, Story } from "@storybook/react";
import { Breadcrumbs } from "./Breadcrumbs";

export default {
  title: "Components/Breadcrumbs",
} as Meta;

const Template: Story = () => (
  <Breadcrumbs
    pages={[
      { name: "Home", path: "/" },
      { name: "Shirts", path: "/collections/shirts" },
      { name: "Plain Tee", path: "/products/plain-tee" },
    ]}
  />
);

export const Default = Template.bind({});
