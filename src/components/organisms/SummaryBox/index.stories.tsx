import { Meta, StoryFn, StoryObj } from "@storybook/react";
import SummaryBox from "./index";
export default {
  title: "Organisms/SummaryBox",
  component: SummaryBox,
} as Meta<typeof SummaryBox>;

type Story = StoryObj<typeof SummaryBox>;

export const mySummaryBox: Story = {
  args: {
    term: 0,
    selectedcontract: 0,
    paybackamount: 0,
    rate: 0,
    slider: false,
    buttonlabel: "Review you credit",
    totallabel: "Total Payout",
    value: 0,
  },
};
