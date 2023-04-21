import React from "react";
import { Box, Stack } from "@mui/material";
import TypoGraphy from "../../components/atoms/TypoGraphy";
import { NewCashKick } from "../../components/molecules/NewCashKick";
import { MyButton } from "../../components/atoms/Button";
import styled from "@emotion/styled";
import theme from "../../theme/theme";
import DataTable from "../../components/organisms/dataTable";
import CardData from "../../components/molecules/cardData";
import axios from "axios";
import { columnsCachKicks, columnsContracts } from "../../components/organisms/dataTable/columnHeaders";
import { BASE_URL } from "../../utils";
import {useNavigate} from 'react-router-dom';

const contracts = columnsContracts
const cashkicks = columnsCachKicks;

const BodyContent = () => {

    const navigate=useNavigate();
    const [rows, setRows] : any = React.useState([]);

    const [resourceType,setResourceType] = React.useState('contracts');

    const [isError,setIsError] = React.useState(false);

    const [backgroundColor1,setBackgroundcolor1] = React.useState('');
    const [backgroundColor2,setBackgroundcolor2] = React.useState('');
    const [border1,setBorder1] = React.useState('')
    const [border2,setBorder2] = React.useState('')



    const [items, setItems] = React.useState(
      <DataTable checkBox={false} columns={contracts} rows={rows} />
    );

    React.useEffect(() => {
      console.log(resourceType);
      
      axios.get(`${BASE_URL}${resourceType}`)
      .then(res => {
        setRows(res.data);
        setItems(
          <DataTable checkBox={false} columns={resourceType==="contracts" ? contracts : cashkicks} rows={res.data} />
        );

        if (resourceType==="contracts") {

          setBackgroundcolor1(`${theme.palette.purple?.[600]}`);
          setBackgroundcolor2(`${theme.palette.secondary.main}`);
          setBorder1(`1px solid ${theme.palette.purple?.[400]}`);
          setBorder2(`1px solid ${theme.palette.border?.highemp}`);
        } else {
          setBackgroundcolor1(`${theme.palette.secondary.main}`);
          setBackgroundcolor2(`${theme.palette.purple?.[600]}`);
          setBorder1(`1px solid ${theme.palette.border?.highemp}`);
          setBorder2(`1px solid ${theme.palette.purple?.[400]}`);
        }
      })
      .catch(err => {
        setIsError(true)
      })

    },[resourceType])

    const BodyBox = styled(Box)({
        width: "100%",
        display: "flex",
        flexDirection : 'column',
        justifyContent: "center",
        alignItems: "center",
        gap:'10px',
    });
    const CardBox = styled(Box)({
        width: "70%",
    });

    const CashBox = styled(Box)({
        width: "30%",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
    });

    const CardCashBox = styled(Box)({
        width: "1080px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginLeft:'25px',
    });

    const TypoBox = styled(Box)({
      marginLeft:'10px',
    })

    const ButtonBox = styled(Box)({
      display: "flex",
      gap: "20px",
      marginLeft: "10px",
    });
    const TableBox = styled(Box)({
        
        height:"150px",
    });
    const TypoButtonBox = styled(Box)({
      display: "flex",
      flexDirection: "column",
      gap: "20px",
      marginTop: "20px",
    });
    const TableTypoBox = styled(Box)({
      backgroundColor: theme.palette.secondary.light,
      border: theme.palette.border?.highemp,
      width: "1080px",
      borderRadius:'12px',
      marginLeft:"20px",
    });



  return (
    <BodyBox>
      <CardCashBox>
        <CardBox>
          <Stack>
            <CardData
              width={"95%"}
              Cardstyle={{ backgroundColor: theme.palette.secondary.light}}
            />
          </Stack>
        </CardBox>
        <CashBox>
          <NewCashKick
            boxWidth={250}
            boxHeight={200}
            buttonName={"New Cash Kick"}
            buttonWidth={230}
            buttonHeight={40}
            headText={"Launch a new Cash Kick"}
            cost={"$880,000.00"}
            headTypographyVariant={"heading1"}
            bodyTypographyVariant={"caption"} 
            handleClick={() => navigate('/newCashKick')}          
        />
        </CashBox>
      </CardCashBox>
      <TableTypoBox>
        <TypoButtonBox>
          <TypoBox>
            <TypoGraphy
              label={"Cash accleration"}
              variants="heading2"
              style={{ color: theme.palette.text.primary }}
            />
          </TypoBox>
          <ButtonBox>
            <MyButton
              name={"My Contract"}
              width={147}
              height={43}
              variant="contained"
              backgroundColor={backgroundColor1}
              border={border1}
              sx={{
                borderRadius: "12px",
                padding: "12px 24px",
                textTransform: "none",
              }}
              
              onClick={() => setResourceType('contracts')}
            />
            <MyButton
              name={"My Cash Kicks"}
              width={147}
              height={43}
              variant="outlined"
              color={`${theme.palette.text.secondary}`}
              border = {border2}
              backgroundColor={backgroundColor2}
              sx={{
                borderRadius: "12px",
                padding: "12px 24px",
                textTransform: "none",
              }}
              onClick={() => setResourceType('cashkicks')}
            />
          </ButtonBox>
          <TableBox>
            {!isError ? (
              items
            ) : (
              <TypoGraphy label="Table Data Not Found" />
            )}
          </TableBox>
        </TypoButtonBox>
      </TableTypoBox>
    </BodyBox>
  );
};

export default BodyContent;
