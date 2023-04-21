import { Stack, Box } from "@mui/material";
import TypoGraphy from "../../components/atoms/TypoGraphy";

import { MyButton } from "../../components/atoms/Button";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import theme from "../../theme/theme";

import Profile from "../../components/molecules/Profile";
import {useNavigate} from 'react-router-dom';
const HeaderComponent = () => {
  const navigate = useNavigate();
  return (
    <>
      <Stack
        flexDirection={"row"}
        marginBottom="35px"
        justifyContent={"space-between"}
        width={"1100px"}
        data-testid="header"
      >
        <Stack>
          <TypoGraphy
            variants="heading1"
            style={{
              color: theme.palette.text.primary,
              width: "229px",
              height: "42px",
            }}
            label="New Cash Kick"
          />
          <TypoGraphy
            variants="body1"
            style={{
              color: theme.palette.text.disabled,
              width: "350px",
              height: "27px",
            }}
            label="Let’s setup a new cash kick to power your Saas"
          />
          <Box paddingTop={1}>
            <MyButton
              icon={<KeyboardBackspaceIcon />}
              backgroundColor={theme.palette.secondary.light}
              name="Back"
              height={31}
              width={87}
              variant="contained"
              color={theme.palette.text.primary}
              sx={{
                textTransform: "none",
                fontWeight: "600",
                fontSize: "16px",
                border: "1px solid #28272B",
              }}
              onClick={()=>navigate(-1)}
            />
          </Box>
        </Stack>
        <Stack>
          <Profile />
        </Stack>
      </Stack>
    </>
  );
};

export default HeaderComponent;
