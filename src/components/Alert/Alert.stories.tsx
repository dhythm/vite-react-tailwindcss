import { ComponentStory, Meta, Story } from "@storybook/react";
import { Alert } from "./Alert";

export default {
  title: "Components/Alert",
} as Meta;

const Template: ComponentStory<typeof Alert> = ({ variant }) => (
  <Alert variant={variant}>Component is shown!</Alert>
);

export const Success = Template.bind({});
Success.args = {
  variant: "success",
};

export const Warning = Template.bind({});
Warning.args = {
  variant: "warning",
};

export const Error = Template.bind({});
Error.args = {
  variant: "alert",
};

export const Info = Template.bind({});
Info.args = {
  variant: "info",
};
