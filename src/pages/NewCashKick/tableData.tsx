import React,{ useEffect, useState } from "react";
import DataTable from "../../components/organisms/dataTable";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/system";
import Card from "@mui/material/Card";
import Stack from "@mui/material/Stack";
import TypoGraphy from "../../components/atoms/TypoGraphy";
import infoIcon from "../../../public/assets/icons/info-circle.svg";
import Icon from "../../components/atoms/Icon";
import SummaryBox from "../../components/organisms/SummaryBox";
import { GridColDef, GridRowSelectionModel ,GridRenderCellParams } from "@mui/x-data-grid";
import axios from "axios";
import {useNavigate} from 'react-router-dom';
import { BASE_URL } from "../../utils";
const MyCard = styled(Card)({
  boxSizing: "border-box",
  display: "flex",
  alignItems: "flex-start",
  padding: "32px 0px 32px 32px",
  gap: "20px",
  width: "740px",
  height: "529px",
  background: "#201F24",
  border: "1px solid #28272B",
  borderRadius: "12px",
});

const TableData = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState<any | null>([]);
  const [iserror, seterror] = useState("");
  type data = {
    id: "";
    name: "";
    type: "";
    status: "";
    perPayment: "";
    termLength: {
      termLength: "";
      termPercentage: "";
    };
    totalFinanced: "-";
    paymentAmount: "";
  };

  const [tableData, setTableData] = useState<any>([]);
  const [selectedRows, setSelectedRows] = useState<any>([]);
  const [selectedContractsTable, setSelectedContractsTable] = useState<any>([]);
  const [value, setValue] = React.useState<
    number | string | Array<number | string>
  >(0);
  const [sum, setsum] = useState(0);
  const columns: GridColDef[] = [
    { field: "name", headerName: "name", width: 125 },
    {
      field: "type",
      headerName: "Type",
      width: 125,
    },

    {
      field: "perPayment",
      headerName: "Per payment",

      width: 125,
      renderCell: (params: GridRenderCellParams) => {
        return <TypoGraphy label={`$ ${params.value}`} variants="body2" />;
      },
    },
    {
      field: "termLength",
      headerName: "Term Length",
      width: 125,
      renderCell: (params: GridRenderCellParams) => {
        return (
          <Stack direction="column">
            <TypoGraphy label={params.value.termLength} variants="body2" />
            <TypoGraphy
              label={params.value.termPercentage}
              variants="caption"
            />
          </Stack>
        );
      },
    },
    {
      field: "paymentAmount",
      headerName: "Payment Order",
     width:125,
      // headerAlign: "center",
      renderCell: (params: GridRenderCellParams) => {
        console.log(params.value.paymentAmount);
        return <TypoGraphy label={`$ ${params.value}`} variants="body2" />;
      },
    },
  ];
  const getdata = () => {
    axios
      .get(`${BASE_URL}contracts`, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
          "Access-Control-Allow-Methods": "*",
          "Access-Control-Allow-Headers": "*",
        },
      })
      .then((res) => {
        setUsers(res.data);
        setTableData(res.data);
      })
      .catch((err) => seterror(err.message));
  };
  useEffect(getdata, []);
  var selectedRowsData: data[];
  const calculateSum = () => {
    let amount = 0;
    users.forEach((contract: any) => {
      amount += parseFloat(contract.paymentAmount);
    });
    return amount;
  };
  const onCheckboxSelect = (ids: GridRowSelectionModel) => {
    selectedRowsData = ids.map((id) => users.find((row: any) => row.id === id));
    console.log(selectedRowsData);
    setsum(
      selectedRowsData.length === 0
        ? 0
        : selectedRowsData.reduce((acc, obj) => {
            console.log("bj", obj.paymentAmount);
            return acc + parseFloat(obj.paymentAmount);
          }, 0)
    );
    setSelectedContractsTable(ids);
    setSelectedRows(selectedRowsData);
  };
  const handleSliderChange = (event: Event, newValue: number | number[]) => {
    console.log("handle slider : " + newValue);
    let totalSelectedPayment = selectedRows.reduce(
      (total: number, obj: any) => total + parseFloat(obj.paymentAmount),
      0
    );
    console.log("total", totalSelectedPayment);
    setValue(newValue);
    if (newValue > totalSelectedPayment) {
      const filteredArray = getContracts();

      const newSelectedRows = [...selectedRows];
      const newSelectedContractsTable = [...selectedContractsTable];
      newSelectedRows.push(filteredArray[0]);
      newSelectedContractsTable.push(filteredArray[0].id);
      setsum(
        newSelectedRows.length === 0
          ? 0
          : newSelectedRows.reduce((acc, obj) => {
              console.log("bj", obj.paymentAmount);
              return acc + parseFloat(obj.paymentAmount);
            }, 0)
      );

      setSelectedRows(newSelectedRows);
      setSelectedContractsTable(newSelectedContractsTable);
    } else if (newValue < totalSelectedPayment) {
      const newSelectedRows = [...selectedRows];
      const newSelectedContractsTable = [...selectedContractsTable];
      newSelectedRows.pop();
      newSelectedContractsTable.pop();
      setsum(
        newSelectedRows.length === 0
          ? 0
          : newSelectedRows.reduce((acc, obj) => {
              console.log("bj", obj.paymentAmount);
              return acc + parseFloat(obj.paymentAmount);
            }, 0)
      );

      setSelectedRows(newSelectedRows);
      setSelectedContractsTable(newSelectedContractsTable);
    }

    console.log("sum", sum);
    setValue(newValue);
  };

  const getContracts = () => {
    console.log("data is", tableData);
    return tableData.filter((object1: any) => {
      return !selectedRows.some((object2: any) => {
        return object1.id === object2.id;
      });
    });
  };
  const handleReset = () => {
    setSelectedRows([]);
    setSelectedContractsTable([]);
    setsum(0);
  };
  return (
    <>
      <Grid
        container
        direction="row"
        spacing={2}
        justifyContent="flex-start"
        alignItems="center"
      >
        <Grid item>
          <MyCard>
            <Stack direction="column" spacing={2}>
              <Stack direction="row" justifyContent="flex-start" spacing={1.25}>
                <TypoGraphy variants="heading2" label="Your Contracts" />
                <Icon src={infoIcon} alt="icon" />
              </Stack>
              {iserror === "" ? (
                <DataTable
                  columns={columns}
                  rows={tableData}
                  checkBox={true}
                  data-testid="datatable"
                  setSelectedContracts={onCheckboxSelect}
                  selectedContracts={selectedContractsTable}
                />
              ) : (
                <h1>{iserror}</h1>
              )}
            </Stack>
          </MyCard>
        </Grid>
        <Grid item>
          <SummaryBox
            term={12}
            selectedcontract={selectedRows.length}
            rate={((sum * 0.12).toFixed(2))}
            slider={true}
            buttonlabel="Review Your Credit"
            totallabel="Total Payout"
            sliderValue={sum}
            value={sum}
            boxheight="460px"
            paybackamount={sum.toFixed(2)}
            ratepercentage={"12.00"}
            totalselectedvalue={calculateSum().toString()}
            maxValue={calculateSum()}
            totalPayout={parseFloat((sum + sum * 0.12).toFixed(2))}
            handleSliderChange={handleSliderChange}
            handleReset={handleReset}
            handleCredit={()=>navigate('/reviewCashKick',{state:{
              sum,
              selectedRows,
            }})}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default TableData;
