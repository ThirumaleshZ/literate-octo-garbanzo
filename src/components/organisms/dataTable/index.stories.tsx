import type { Meta, StoryObj } from "@storybook/react";
import DataTable from ".";
import dbData from "../../../../db.json";
import { columnsPayments } from "./columnHeaders";

export const payments = dbData["payments"];

const meta: Meta<typeof DataTable> = {
  title: "Organisms/DataTable",
  component: DataTable,
};

export default meta;

type Story = StoryObj<typeof DataTable>;

export const DataTableWithCheckbox: Story = {
  args: {
    checkBox: true,
    columns: columnsPayments,
    rows: payments,
  },
};
export const DataTableWithoutCheckbox: Story = {
  args: {
    checkBox: false,
    columns: columnsPayments,
    rows: payments,
  },
};
