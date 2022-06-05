---
to: stories/<%= name %>.stories.tsx
unless_exists: true
---
import { ComponentMeta, ComponentStoryObj } from "@storybook/react";
import { <%= name %> as <%= name %>Component } from "../components/<%= name %>";

const Meta: ComponentMeta<typeof <%= name %>Component> = { 
  title:"Components",
  component: <%= name %>Component,
};
export default Meta;

export const Template: ComponentStoryObj<typeof <%= name %>Component> = {
  args: {},
};