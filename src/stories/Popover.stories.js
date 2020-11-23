/** @format */

import React from "react";
import Popover from "../view/components/Popover";
import "./popover.css";

export default {
  title: "Example/PopOver/top",
  component: Popover,
  parameters: {
    backgrounds: {
      values: [
        { name: "red", value: "#f00" },
        { name: "green", value: "#0f0" },
      ],
    },
  },
  decorators: [
    (Story) => (
      <div className='flex-ap flex-col'>
        <Story />
      </div>
    ),
  ],
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
};
const content =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
const Template = (args) => (
  <>
    <div>
      <Popover {...args}>
        <button>popover</button>
      </Popover>
    </div>
    <div>positions: Top | Bottom | Left | Right</div>
    <div>aligns: Start | Center | End</div>
  </>
);

export const top = Template.bind({});
top.args = {
  trigger: "hover",
  content: content,
  title: "top title",
  position: "top",
  align: "start",
  onOpen: () => {},
  onClose: () => {},
};

export const bottom = Template.bind({});
bottom.args = {
  trigger: "click",
  content: content,
  title: "bottom title",
  position: "bottom",
  align: "center",
  onOpen: () => {},
  onClose: () => {},
};
export const left = Template.bind({});
left.args = {
  trigger: "hover",
  content: content,
  title: "left title",
  position: "left",
  align: "center",
  onOpen: () => {},
  onClose: () => {},
};
export const right = Template.bind({});
right.args = {
  trigger: "click",
  content: content,
  title: "right title",
  position: "right",
  align: "center",
  onOpen: () => {},
  onClose: () => {},
};
