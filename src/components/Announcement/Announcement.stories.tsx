import { ComponentStory, Meta } from "@storybook/react";
import { Announcement } from "./Announcement";

export default {
  title: "Components/Announcement",
} as Meta;

const Template: ComponentStory<typeof Announcement> = () => (
  <Announcement>
    Love Alpine JS? Check out this new course!{" "}
    <a className="underline" href="/alpinejs">
      Learn More &rarr;
    </a>
  </Announcement>
);

export const Default = Template.bind({});
