import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "storybook/test";
import { View } from "react-native";
import Button from "../../../../src/components/Button";

const meta = {
  title: "Button",
  component: Button,
  args: {
    title: "Hello world",
    onPress: () => console.log("Pressed!")
  },
  decorators: [
    (Story) => (
      <View style={{ padding: 16 }}>
        <Story />
      </View>
    ),
  ],
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    onPress: fn(),
  },
};
