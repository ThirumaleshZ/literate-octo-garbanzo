import { Stack, Box, Grid } from "@mui/material"
import TypoGraphy from "../../components/atoms/TypoGraphy"
import theme from "../../theme/theme"
import styled from "styled-components"
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import SummaryBox from "../../components/organisms/SummaryBox"
import DataTable from "../../components/organisms/dataTable"
import { GridColDef, GridRenderCellParams } from "@mui/x-data-grid";
import {useEffect, useState} from 'react';
import ModalBox from "../../components/organisms/ModalBox";
import { columnsContracts } from "../../components/organisms/dataTable/columnHeaders";
import CashKickModalBox from "../../components/organisms/CashKickModalBox";
import { useLocation, useNavigate } from 'react-router-dom';
import axios from "axios";
import { BASE_URL } from "../../utils";
const columns: GridColDef[] = [
    { field: "name", headerName: "Name",  width: 150 },
    {
      field: "type",
      headerName: "Type",
       width: 150
    },
    {
      field: "perPayment",
      headerName: "Per payment", 
      width: 150
    },
    {
      field: "termLength",
      headerName: "Term Length",
      width: 150,
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
      field: "paymentAmount",
      headerName: "Payment Order",
      width: 150,
    },
  ];
  
export const BodyComponent=()=>{
  const [myTotalRecived,setTotalRecived]=useState("");
  const [dateStr,setDateStr]=useState("");
  const [term,setTerm]=useState(0)
  const [isModalOpen, setIsModalOpen]=useState(false);
  const [isModalCreateCash,setIsModalCreateCash]=useState(false);
  const [post,setPost]=useState([]);
  const [payment,setPayment]=useState([]);
  let name="";
  const handleModalOpen=()=>{
    setIsModalOpen(true);
  }
  
  const location= useLocation();
  let totalpayout=0;
   totalpayout=location?.state?.sum + location?.state?.sum * 0.12;
  const sum=location?.state?.sum as number;
  const data=location?.state?.selectedRows;
  const handleCreateCashOpen=()=>{
    setIsModalCreateCash(true);
    setIsModalOpen(false);
    setTerm(location.state.term)
      const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
      const d = new Date(Date.now()+ (1000 * 60 * 60 * 24 * 30 * 12)+(6*24*60*60*1000)).getDate(); 
      const y = new Date(Date.now()+ (1000 * 60 * 60 * 24 * 30 * 12)+(6*24*60*60*1000)).getFullYear();
      const m = new Date(Date.now()+ (1000 * 60 * 60 * 24 * 30 * 12)+(6*24*60*60*1000)).getMonth(); 
      const datestr = months[m] + ' ' + d +', ' + y;
      setDateStr(datestr)
      setTotalRecived(location.state.totalpayout);
      let due_date = new Date(Date.now() + 1000 * 60 * 60 * 24 * 30)
      let expectedAmount=Math.round(totalpayout / 12);
      let differenceInDays = 31;
    axios
    .post(`${BASE_URL}cashkicks`, {
      name:name,
      maturity:datestr,
      status:'Pending',
      totalRecieved:{
        totalRecieved:Math.round(totalpayout),
        totalInterestrate: "12% fee",
      },
      totalFinanced:sum.toFixed(2),
    })
    .then((response) => {
      setPost(response.data);
    });
    const postPayments = async (totalpayout:number, due_date:Date, differenceInDays:number) => {
      if (Math.round(totalpayout) > 0) {
        await axios
          .post(`${BASE_URL}payments`, {
            dueDate: {
              dueDate:
                months[due_date.getMonth()] +" " +
                due_date.getDate() +
                ", " +
                due_date.getFullYear(),
              daysLeft: differenceInDays + " day(s) from now",
            },
            status: "Upcoming",
            expectedAmount: "-" + expectedAmount.toFixed(2),
            outstanding: totalpayout.toFixed(2),
          })
          .then((response) => {
            setPayment(response.data);
          })
          .catch((e) => console.log(e));
    
        totalpayout -= expectedAmount;
        due_date.setDate(due_date.getDate() + 31);
        differenceInDays += 31;
    
        if (due_date.getMonth() === 0) {
          due_date.setFullYear(due_date.getFullYear() + 1);
        }
        postPayments(totalpayout, due_date, differenceInDays);
      }
    };
    postPayments(totalpayout, due_date, differenceInDays);    
  }
  const [rows, setRows]=useState<typeof columnsContracts>();
  const navigate = useNavigate();
    useEffect(()=>{
      axios.get(`${BASE_URL}cashkicks`).then((res)=>{
        setPost(res.data);
      })
      axios.get(`${BASE_URL}payments`).then((res)=>{
        setPayment(res.data);
      })
      setRows(location?.state?.selectedRows);
    },[])
    const StyleInfoIcon=styled(InfoOutlinedIcon)`
    color: #727080;
    `;

    const StyleBox=styled(Box)`
        width: 800px;
        margin-right: 5px;
        background-color: ${theme.palette.secondary.light};
        border: 1px solid ${theme.palette.border?.lowemp};
        border-radius: 12px;
        display: flex;
        flex-direction: column;
    `;
    
    const handleChange=(num:number)=>{
      return "";
    }
    const handleSliderChange=()=>{
      
    }
    const calculateSum = () => {
      let amount = 0;
      location?.state?.selectedRows.forEach((contract: any) => {
        amount += parseFloat(contract.paymentAmount);
      });
      return amount;
    };
    return(
        <Stack flexDirection={"row"}>
          <StyleBox >
              <Stack flexDirection={"row"} gap={2} margin={'32px'}>
                  <TypoGraphy 
                  label="Selected Contracts" 
                  variants="heading2" 
                  style={{
                    color:theme.palette.text.primary
                  }}/>

                  <StyleInfoIcon/>
              </Stack>
              <Grid marginLeft={'12px'} marginRight={'12px'} sx={{border:'none'}}>
                  <DataTable  checkBox={false} columns={columns} rows={rows??[]} />
              </Grid>
              <ModalBox
                heading="Name your cash kick"
                subHeading="Add a name to identify your cash kick"
                TextfieldLabel="Cash kick name"
                Cancelbuttonlabel="Cancel"
                Clickbuttonlabel="Create Cash Kick"
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onClick={handleCreateCashOpen}
                handleChange={(e)=>{name=(e.target.value)}}
                data-testid='Modal'
              />
              <CashKickModalBox
                Cancelbuttonlabel="Close"
                Clickbuttonlabel="View cash kicks"
                TextfieldLabel="Your cash kick is under review"
                bodytext="It will remain on pending state until we review it internally. This can take upto 5 mins to couple of hours. Once reviewed, the cash will be transferred to your account and you’ll be notified."
                heading="Cash kick launched successfully!"
                subHeading="We are reviewing your cash kick"
                isOpen={isModalCreateCash}
                onClose={()=>{setIsModalCreateCash(false);navigate('/dashboard')}}
                handleViewCash={()=>navigate('/cashAccleration')}
              />
          </StyleBox>
          <SummaryBox 
          ratepercentage={"12.00"}
          totalselectedvalue="22"
          boxheight="340px" 
          term={12} 
          selectedcontract={location?.state?.selectedRows.length} 
          paybackamount={(location?.state?.sum)?.toFixed(2)} 
          rate={(location?.state?.sum*0.12)?.toFixed(2)} 
          buttonlabel="Submit Your Credit" 
          totallabel="Total Payout" 
          totalPayout={parseFloat(totalpayout?.toFixed(2))} 
          slider={false}
          handleCredit={handleModalOpen}
          handleChange={()=>handleChange(calculateSum())}
          handleSliderChange={handleSliderChange}
          data-testid='summary-box'
           />
          
        </Stack>
    )
}