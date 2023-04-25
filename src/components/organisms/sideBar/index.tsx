import { useContext, useState } from "react";
import { SideItem } from "../../molecules/SideItem/index.stories";
import seederLogo from "../../../../public/assets/icons/seederLogo.svg";
import Thundervector from "../../../../public/assets/icons/thunderVector.svg";
import Home from "../../../../public/assets/icons/Home.svg";
import coin from "../../../../public/assets/icons/coin.svg";
import Grid from "@mui/material/Grid";
import { Paper, Stack } from "@mui/material";
import {useNavigate} from 'react-router-dom';
import { styled } from "@mui/system";
import { UserContext } from "../../../App";

interface Props {
  width: string;
  height: string;
}

const SideBar = ({ width, height }: Props) => {
  const Mypaper = styled(Paper)({
    backgroundColor: "#201F24",
    width: width,
    height: height,
  });


  const [isActive, setIsActive] = useContext(UserContext);
  const navigate = useNavigate();
  return (
    <>
      <Grid data-testid="sidebar">
        <Mypaper elevation={17}>
          <Stack
            direction="column"
            justifyContent="center"
            alignItems="flex-start"
            spacing={1}
            ml="24px"
          >
            <Stack mt="2rem">
              <SideItem
                children="Seeder"
                src={seederLogo}
                color="text.primary"
                variant="heading1"
              />
            </Stack>
            <Stack
              direction="column"
              justifyContent="center"
              alignItems="flex-start"
            >
              <Stack mt="56px" spacing="40px">
                <SideItem
                  children="Home"
                  src={Home}
                  color="text.primary"
                  variant="button2"
                  isactive={isActive === "home"}
                  handleClick={() => {
                    setIsActive("home");
                    navigate("/dashboard");
                  }}
                />
                <SideItem
                  children="Cash Accleration"
                  src={coin}
                  color="text.primary"
                  variant="button2"
                  isactive={isActive === "cash"}
                  handleClick={() => {
                    setIsActive("cash");
                    navigate("/cashAccleration");
                  }}
                />
              </Stack>
            </Stack>
            <Stack
              direction="column"
              spacing={1}
              sx={{ position: "absolute", bottom: "3rem" }}
            >
              <SideItem
                children="Watch How to"
                src={Thundervector}
                color="text.disabled"
                variant="button2"
                isactive={isActive === "watch"}
                handleClick={() => setIsActive("watch")}
              />
            </Stack>
          </Stack>
        </Mypaper>
      </Grid>
    </>
  );
};

export default SideBar;