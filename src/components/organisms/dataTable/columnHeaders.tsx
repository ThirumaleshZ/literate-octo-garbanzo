import { Stack } from "@mui/material";
import {
  GridColDef,
  GridColumnHeaderParams,
  GridRenderCellParams,
} from "@mui/x-data-grid";
import MUIChip from "../../atoms/Chip";
import TypoGraphy from "../../atoms/TypoGraphy";

export const columnsPayments: GridColDef[] = [
  {
    field: "dueDate",
    headerName: "Due date",

    flex: 1,
    renderHeader: (params: GridColumnHeaderParams) => {
      return (
        <TypoGraphy label={params.colDef.headerName ?? ""} variants="body2" />
      );
    },
    renderCell: (params: GridRenderCellParams) => {
      return (
        <Stack direction="column">
          <TypoGraphy label={params.value.dueDate} variants="body2" />
          <TypoGraphy label={params.value.daysLeft} variants="caption" />
        </Stack>
      );
    },
  },
  {
    field: "status",
    headerName: "Status",
    flex: 1,
    renderHeader: (params: GridColumnHeaderParams) => {
      return (
        <TypoGraphy label={params.colDef.headerName ?? ""} variants="body2" />
      );
    },
    renderCell: (params: GridRenderCellParams) => {
      return (
        <MUIChip
          label={params.value}
          sx={{
            variant: "body2",
            color: "text.secondary",
            backgroundColor: "secondary.main",
            borderRadius: "5px",
          }}
        />
      );
    },
  },
  {
    field: "expectedAmount",
    headerName: "Expected amount",
    flex: 1,
    renderHeader: (params: GridColumnHeaderParams) => {
      return (
        <TypoGraphy label={params.colDef.headerName ?? ""} variants="body2" />
      );
    },
  },
  {
    field: "outstanding",
    headerName: "Outstanding",
    flex: 1,
    renderHeader: (params: GridColumnHeaderParams) => {
      return (
        <TypoGraphy label={params.colDef.headerName ?? ""} variants="body2" />
      );
    },
  },
];

export const columnsContracts: GridColDef[] = [
  {
    field: "name",
    headerName: "Name",
    flex: 1,
    renderHeader: (params: GridColumnHeaderParams) => {
      return (
        <TypoGraphy label={params.colDef.headerName ?? ""} variants="body2" />
      );
    },
  },
  {
    field: "type",
    headerName: "Type",
    flex: 1,
    renderHeader: (params: GridColumnHeaderParams) => {
      return (
        <TypoGraphy label={params.colDef.headerName ?? ""} variants="body2" />
      );
    },
  },
  {
    field: "status",
    headerName: "Status",
    flex: 1,
    renderHeader: (params: GridColumnHeaderParams) => {
      return (
        <TypoGraphy label={params.colDef.headerName ?? ""} variants="body2" />
      );
    },
    renderCell: (params: GridRenderCellParams) => {
      return (
        <MUIChip
          label={params.value}
          sx={{
            variant: "body2",
            color: "text.secondary",
            backgroundColor: "secondary.main",
            borderRadius: "5px",
          }}
        />
      );
    },
  },
  {
    field: "perPayment",
    headerName: "Per Payment",
    flex: 1,
    renderHeader: (params: GridColumnHeaderParams) => {
      return (
        <TypoGraphy label={params.colDef.headerName ?? ""} variants="body2" />
      );
    },
  },
  {
    field: "termLength",
    headerName: "Term Length",
    flex: 1,
    renderHeader: (params: GridColumnHeaderParams) => {
      return (
        <TypoGraphy label={params.colDef.headerName ?? ""} variants="body2" />
      );
    },
    renderCell: (params: GridRenderCellParams) => {
      return (
        <Stack direction="column">
          <TypoGraphy label={params.value.termLength} variants="body2" />
          <TypoGraphy label={params.value.termPercentage} variants="caption" />
        </Stack>
      );
    },
  },
  {
    field: "totalFinanced",
    headerName: "Total Financed",
    flex: 1,
    renderHeader: (params: GridColumnHeaderParams) => {
      return (
        <TypoGraphy label={params.colDef.headerName ?? ""} variants="body2" />
      );
    },
  },
  {
    field: "paymentAmount",
    headerName: "Payment Amount",
    flex: 1,
    renderHeader: (params: GridColumnHeaderParams) => {
      return (
        <TypoGraphy label={params.colDef.headerName ?? ""} variants="body2" />
      );
    },
  },
];

export const columnsCachKicks: GridColDef[] = [
  {
    field: "name",
    headerName: "Name",
    flex: 1,
    renderHeader: (params: GridColumnHeaderParams) => {
      return (
        <TypoGraphy label={params.colDef.headerName ?? ""} variants="body2" />
      );
    },
  },
  {
    field: "status",
    headerName: "Status",
    flex: 1,
    renderHeader: (params: GridColumnHeaderParams) => {
      return (
        <TypoGraphy label={params.colDef.headerName ?? ""} variants="body2" />
      );
    },
    renderCell: (params: GridRenderCellParams) => {
      return (
        <MUIChip
          label={params.value}
          sx={{
            variant: "body2",
            color: "text.secondary",
            backgroundColor: "secondary.main",
            borderRadius: "5px",
          }}
        />
      );
    },
  },
  {
    field: "maturity",
    headerName: "Maturity",
    flex: 1,
    renderHeader: (params: GridColumnHeaderParams) => {
      return (
        <TypoGraphy label={params.colDef.headerName ?? ""} variants="body2" />
      );
    },
  },
  {
    field: "totalRecieved",
    headerName: "Total received",
    flex: 1,
    renderHeader: (params: GridColumnHeaderParams) => {
      return (
        <TypoGraphy label={params.colDef.headerName ?? ""} variants="body2" />
      );
    },
    renderCell: (params: GridRenderCellParams) => {
      return (
        <Stack direction="column">
          <TypoGraphy label={params.value.totalRecieved} variants="body2" />
          <TypoGraphy
            label={params.value.totalInterestrate}
            variants="caption"
          />
        </Stack>
      );
    },
  },
  {
    field: "totalFinanced",
    headerName: "Total Financed",
    flex: 1,
    renderHeader: (params: GridColumnHeaderParams) => {
      return (
        <TypoGraphy label={params.colDef.headerName ?? ""} variants="body2" />
      );
    },
  },
];
