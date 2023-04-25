import Card from "@mui/material/Card";
import React from "react";
import Icon from "../../atoms/Icon";
import infoIcon from "../../../../public/assets/icons/info-circle.svg";
import TypoGraphy from "../../atoms/TypoGraphy";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/system";
import MUIChip from "../../atoms/Chip";
import theme from "../../../theme/theme";

interface Inputprops {
  src: string;
  heading1: string;
  textdata: string;
  ischip?: boolean;
  style?: React.CSSProperties;
}
const MyComponent = styled("div")({
  boxSizing: "border-box",
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  padding: "20px",
  gap: "20px",
  width: "80px",
  height: "80px",
  background: "grey.100",
  border: "1px solid #28272B",
  borderRadius: "12px",
});
const CardItem = ({ ischip, src, heading1, textdata, style }: Inputprops) => {
  return (
    <Card sx={style} data-testid="custom-card">
      <Stack
        direction="column"
        justifyContent="center"
        alignItems="flex-start"
        spacing={2}
        mt="2rem"
        ml="2rem"
      >
        {ischip === true ? (
          <MUIChip
            label={<TypoGraphy variants="body1" label="Due in 30 day(s)" />}
            sx={{
              backgroundColor: theme.palette.accent?.pink,
              borderRadius: "4px",
              color: "#201F24",
              marginLeft: "150px",
            }}
            data-testid="muichip"
          />
        ) : (
          ""
        )}

        <MyComponent>
          <Icon src={src} alt="icon" />
        </MyComponent>

        <Stack
          direction="row"
          justifyContent="flex-start"
          alignItems="center"
          spacing={2}
        >
          <TypoGraphy variants="body1" label={heading1}></TypoGraphy>
          <Icon src={infoIcon} alt="icon" />
        </Stack>
        <TypoGraphy variants="heading1" label={textdata}></TypoGraphy>
      </Stack>
    </Card>
  );
};

export default CardItem;
