import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import CPUChart from "@/components/CPUChart";

const meta = {
  title: "Example/Charts",
  component: CPUChart,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  args: {
    dataPoints: fn(),
    dataTs: fn(),
  },
} satisfies Meta<typeof CPUChart>;

export default meta;
type Story = StoryObj<typeof meta>;

const exampleData = {
  "CPU Usage": [
    ["1665608250000", "1665608260000"],
    ["10232", "1232423"],
    ["20234", "22324"],
    ["306546", "3312"],
  ],
  "Memory Usage": [
    ["1665608250000", "1665608260000"],
    ["10", "12"],
    ["20", "22"],
    ["30", "33"],
  ],
  "Network Usage": [
    ["1665608250000", "1665608260000"],
    ["10", "12"],
    ["20", "22"],
    ["30", "33"],
  ],
  "Disk IOPS": [
    ["1665608250000", "1665608260000"],
    ["10", "12"],
    ["20", "22"],
    ["30", "33"],
  ],
};

export const Chart: Story = {
  args: {
    dataPoints: exampleData,
    dataTs: {
      "CPU Usage": [["1665608250000", "1665608260000"]],
      "Memory Usage": [
        ["1665608250000", "1665608260000"],
        ["10", "12"],
        ["20", "22"],
        ["30", "33"],
      ],
      "Network Usage": [
        ["1665608250000", "1665608260000"],
        ["10", "12"],
        ["20", "22"],
        ["30", "33"],
      ],
      "Disk IOPS": [
        ["1665608250000", "1665608260000"],
        ["10", "12"],
        ["20", "22"],
        ["30", "33"],
      ],
    },
  },
};
