import { ComponentStory, Meta } from "@storybook/react";
import { Alert } from "./Alert";

export default {
  title: "Components/Alert",
} as Meta;

const Template: ComponentStory<typeof Alert> = ({ variant }) => (
  <Alert variant={variant}>Component is shown!</Alert>
);

export const Default = Template.bind({});
Default.argTypes = {
  variant: {
    options: ["success", "warning", "alert", "info"],
    control: {
      type: "radio",
    },
  },
};
Default.args = {
  variant: "success",
};
