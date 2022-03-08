import Input from "./Input";

export default {
  title: "components/Input",
  component: Input,
};

const Template = (args) => <Input {...args} />;

export const Light = Template.bind({});
Light.args = {
  title: "Type in your name:",
  placeholder: "e.g. Jane Doe",
};

export const Dark = Template.bind({});
Dark.args = {
  title: "Type in your name:",
  placeholder: "e.g. Jane Doe",
  isDark: true,
};
