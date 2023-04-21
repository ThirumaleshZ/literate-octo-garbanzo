import { Box, styled } from "@mui/material";
import { DataGrid, GridColDef, GridRowSelectionModel } from "@mui/x-data-grid";
import chequeBook3D from "../../../../public/assets/icons/chequeBook3D.svg";
import theme from "../../../theme/theme";
import Icon from "../../atoms/Icon";

interface DataTableProps {
  checkBox: boolean;
  columns: GridColDef[];
  rows: any[];
  setSelectedContracts?: any;
  selectedContracts?: GridRowSelectionModel;
}

export const customNoRowsOverlay = () => {
  return (
    <Box
      data-testid="noRowsOverlay"
      display="flex"
      flexDirection="column"
      paddingTop={5}
    >
      <Icon src={chequeBook3D} alt="cheque book" height={160} />
    </Box>
  );
};

const StyleDataGrid = styled(DataGrid)({
  "&.Mui-selected": {
    backgroundColor: theme.palette.purple?.[600],
    "&:hover": {
      backgroundColor: theme.palette.purple?.[600],
    },
  },
  "& .MuiDataGrid-cell": {
    color: theme.palette.text.secondary,
    borderBottom: "none",
  },
  "& .MuiDataGrid-row": {
    backgroundColor: theme.palette.secondary.light,
  },
  "& .MuiDataGrid-columnHeader": {
    backgroundColor: theme.palette.grey[100],
    color: theme.palette.text.disabled,
    fontVariant: theme.typography.body2,
    borderBottom: "none",
  },
  "& .MuiDataGrid-root, .MuiDataGrid-row.Mui-selected": {
    backgroundColor: theme.palette.purple?.[600],
  },
  "& .MuiDataGrid-root, .MuiDataGrid-row.Mui-selected:hover": {
    backgroundColor: theme.palette.purple?.[600],
  },
  "& .MuiDataGrid-root, .MuiDataGrid-row:hover": {
    backgroundColor: theme.palette.purple?.[600],
  },
  "& .MuiDataGrid-columnHeaders": {
    borderRadius: " 12px 12px 12px 12px ",
  },
  "& .MuiCheckbox-root svg": {
    color: theme.palette.purple?.[400],
    borderRadius: 10,
  },
  "& .MuiSvgIcon-root": {
    borderRadius: 3,
  },
  "& .MuiDataGrid-root, .MuiDataGrid-withBorderColor, .MuiDataGrid-autoHeight, .MuiDataGrid-root--densityStandard":
    {
      border: "none",
    },
  "& .MuiDataGrid-root, ": {
    border: "none",
  },
  "& .MuiDataGrid-overlayWrapper, ": {
    height: "160px",
  },
});

const DataTable = ({
  checkBox,
  columns,
  rows,
  setSelectedContracts,
  selectedContracts,
}: DataTableProps) => {
  return (
    <Box data-testid="dataTable">
      <StyleDataGrid
        autoHeight={true}
        checkboxSelection={checkBox}
        columns={columns}
        rows={rows}
        hideFooter
        slots={{
          noRowsOverlay: customNoRowsOverlay,
        }}
        onRowSelectionModelChange={(newSelectionModel) => {
          setSelectedContracts(newSelectionModel);
        }}
        rowSelectionModel={selectedContracts}
      />
    </Box>
  );
};

export default DataTable;
