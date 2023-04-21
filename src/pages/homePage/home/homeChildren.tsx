import { Box, Stack } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import infoCircle from "../../../../public/assets/icons/info-circle.svg";
import Icon from "../../../components/atoms/Icon";
import TypoGraphy from "../../../components/atoms/TypoGraphy";
import Banner from "../../../components/molecules/Banner";
import { NewCashKick } from "../../../components/molecules/NewCashKick";
import DataTable from "../../../components/organisms/dataTable";
import { columnsPayments } from "../../../components/organisms/dataTable/columnHeaders";
import { BASE_URL } from "../../../utils";
const HomePageChildren = () => {
  const [totalAmount, setTotalAmount] = useState<string>("$880,000.00");
  const navigate = useNavigate();
  useEffect(() => {
    axios.get(`${BASE_URL}user`).then((response) => {
      setTotalAmount(response.data.totalAmount);
    });
  }, []);

  return (
    <Box marginTop={2} width="100%" height="100%" data-testid="homeChildren">
      <Stack direction="row" spacing={3} justifyContent="space-around">
        <Box
          sx={{
            height: "100%",
            width: "100%",
            backgroundColor: "white",
          }}
        >
          <Banner
            heading="Congratulations you are ready to start!"
            subHeading="You are approved for funding. We are ready to advance you upto $8.8M"
            buttonLabel="Learn More"
          />
        </Box>
        <Box
          sx={{
            backgroundColor: "white",
          }}
        >
          <NewCashKick
            boxWidth={340}
            boxHeight={200}
            buttonWidth={276}
            buttonHeight={59}
            buttonName={"New Cash Kick"}
            headText={"Launch a new Cash Kick"}
            cost={totalAmount}
            headTypographyVariant={"heading2"}
            bodyTypographyVariant={"body1"}
            handleClick={() => navigate("/newCashKick")}
          />
        </Box>
      </Stack>
      <Box
        sx={{
          backgroundColor: "secondary.light",
          padding: "32px",
          marginTop: "30px",
          borderRadius: "12px",
          display: "flex",
          flexDirection: "column",
          height: "100vh",
        }}
      >
        <Stack direction="column" spacing={3}>
          <Stack direction="row" spacing={1}>
            <TypoGraphy label="Your payments" variants="heading2" />
            <Icon src={infoCircle} alt="Info Circle Icon" />
          </Stack>
          <DataTable columns={columnsPayments} rows={[]} checkBox={false} />
        </Stack>
      </Box>
    </Box>
  );
};

export default HomePageChildren;
