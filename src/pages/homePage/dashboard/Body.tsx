import { Box, Grid, Stack } from "@mui/material";

import { GridColDef, GridRenderCellParams } from "@mui/x-data-grid";
import axios from "axios";
import React from "react";
import CalenderRoll from "../../../../public/assets/icons/calendarRoll.svg"

import coin from "../../../../public/assets/icons/info-circle.svg";
import Icon from "../../../components/atoms/Icon";
import TypoGraphy from "../../../components/atoms/TypoGraphy";
import CardItem from "../../../components/molecules/CardItem";
import { NewCashKick } from "../../../components/molecules/NewCashKick";
import { ProgressBarWithTypo } from "../../../components/molecules/ProgressBarTypo";
import DataTable from "../../../components/organisms/dataTable";
import { columnsPayments } from "../../../components/organisms/dataTable/columnHeaders";
import theme from "../../../theme/theme";
import { BASE_URL } from "../../../utils";
import {useNavigate} from 'react-router-dom';


const columns: GridColDef[] = [
  {
    field: "dueDate",
    headerName: "Due date",
    flex: 1,
    renderCell: (params: GridRenderCellParams) => {
      return (
        <Stack direction="column">
          <TypoGraphy label={params.value.dueDate} variants="body2" />
          <TypoGraphy label={params.value.daysLeft} variants="caption" />
        </Stack>
      );
    },
  },
  { field: "status", headerName: "Status", flex: 1 },
  { field: "expectedAmount", headerName: "Expected Amount", flex: 1 },
  { field: "outstanding", headerName: "Outstanding", flex: 1 },
];

const Body = () => {
  const navigate=useNavigate();
  const [row, setRows] = React.useState<typeof columnsPayments>();

  const [isError, setError] = React.useState(false);

  const getData = async () => {
    const res = await axios
      .get(`${BASE_URL}payments`)
      .then((res) => {
        const fetchedData = res.data;
        setRows(fetchedData);
        console.log(fetchedData);
      })
      .catch((err) => {
        setError(true);
      });
  };

  React.useEffect(() => {
    getData();
  }, []);

  return (
  <Box marginTop={2} width="100%" height="100%">
    <Grid sx={{diplay:'flex', flexDirection:'column'}}>
      <Grid container
       
        sx={{
          height: "100%",
          width: "100%",
          display:'flex',
          flexDirection:'row',
          justifyContent:'space-between'
        }}>
        <Grid item >
             <CardItem
              src={CalenderRoll}
              heading1="Due - May 03, 2021"
              textdata="$14,204.55"
              ischip={true}
              style={{
                width: "350px",
                height: "280px",
                borderRadius: "12px",
                color: theme.palette.text.primary,
                backgroundColor: theme.palette.secondary.light,
              }}
            />
        </Grid>
        
        
          <Grid item >
              <ProgressBarWithTypo
                headText={"$14,204.55"}
                bodyText={"Due - May 03, 2021"}
                headTypographyVariant={"heading1"}
                bodyTypographyVariant={"caption"}
                percentage={2}
                boxWidth={360}
                boxHeight={280}
              />
          </Grid>
        
          <Grid item >
            <NewCashKick
              boxWidth={300}
              boxHeight={210}
              buttonName={"New Cash Kick"}
              buttonWidth={276}
              buttonHeight={59}
              headText={"Launch a new Cash Kick"}
              cost={"$709,546.00"}
              headTypographyVariant={"heading1"}
              bodyTypographyVariant={"body1"}
              handleClick={()=>navigate('/newCashKick')}
            />
          </Grid>
        
      </Grid>        
    <Box
      sx={{
        backgroundColor: theme.palette.secondary.light,
        padding: "10px",
        marginTop: "20px",
        borderRadius: "12px",
        display: "flex",
        flexDirection: "column",
        height: "100vh",
      }}
    >
      <Stack direction="column" spacing={3}>
          <Stack direction="row" spacing={1}>
            <TypoGraphy
                label={"Your Payments"}
                variants={"heading2"}
                style={{
                  color: theme.palette.text.primary,
                  margin: "20px 10px",
                }}
              />
              <Icon src={coin} alt={"Coin"} />
          </Stack>
          <DataTable checkBox={false} columns={columns} rows={row ?? []} />     
     </Stack>
     
    </Box>
    </Grid>
  </Box>
  );
};

export default Body;
