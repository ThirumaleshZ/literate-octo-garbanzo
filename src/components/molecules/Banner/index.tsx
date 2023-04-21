import { Typography } from "@mui/material";
import { Stack } from "@mui/system";
import styled from "styled-components";
import BannerImg from "../../../../public/assets/icons/bannerImg.svg";
import { MyButton } from "../../atoms/Button";

const Cardstyle = styled.div`
  background-image: url(${BannerImg});
  background-repeat: no-repeat;
  background-size: cover;
  height: 266px;
  width: 100%;
`;

interface Bannerprops {
  heading: string;
  subHeading: string;
  buttonLabel: string;
}

const Banner = ({ heading, subHeading, buttonLabel }: Bannerprops) => {
  return (
    <Cardstyle>
      <Stack
        direction="row"
        paddingX="25px"
        paddingY="25px"
        sx={{ height: "80%" }}
      >
        <Stack
          direction="column"
          width="30%"
          spacing={3}
          alignItems="flex-start"
          justifyContent="center"
          sx={{ height: "100%" }}
        >
          <Typography variant="heading2" color="white.600">
            {heading}
          </Typography>
          <Typography variant="body1" color="white.600">
            {subHeading}
          </Typography>
          <MyButton
            name={buttonLabel}
            variant="outlined"
            width={140}
            height={40}
            color="white"
            border="1px solid white"
            sx={{ paddingY: "25px", textTransform: "none" }}
          />
        </Stack>
      </Stack>
    </Cardstyle>
  );
};

export default Banner;
