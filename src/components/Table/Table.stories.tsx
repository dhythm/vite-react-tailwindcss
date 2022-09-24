import { Meta, Story } from "@storybook/react";
import { Table } from "./Table";

export default {
  title: "Components/Table",
} as Meta;

const Template: Story = () => <Table />;

export const Default = Template.bind({});
