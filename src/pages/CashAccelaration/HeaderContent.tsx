import { Box } from "@mui/material";
import React from "react";
import TypoGraphy from "../../components/atoms/TypoGraphy";
import styled from "@emotion/styled";
import theme from "../../theme/theme";
import Profile from "../../components/molecules/Profile";


const ProfileBox = styled(Box)({
  width: "1080px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});
const TextBox = styled(Box)({
  width: "1080px",
  marginLeft: "25px",
});

const HeaderContent = () => {
  return (
    <TextBox>
      <ProfileBox>
        <TypoGraphy
          label={"Cash accleration"}
          variants="heading1"
          style={{ color: theme.palette.text.primary }}
        />
        <Profile />
      </ProfileBox>
      <Box>
        <TypoGraphy
          label={"Place to create new cash kicks to run your buisness"}
          variants="caption"
          style={{ color: theme.palette.text.primary}}
        />
      </Box>
    </TextBox>
  );
}

export default HeaderContent
