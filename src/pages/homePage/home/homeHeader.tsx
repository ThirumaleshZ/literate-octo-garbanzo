import { Box } from "@mui/material";
import Greetings from "./greetings";
import Profile from "../../../components/molecules/Profile";
const HomePageHeader = () => {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <Greetings />
      <Box sx={{ flex: 1, flexGrow: 1 }}></Box>
      <Profile />
    </Box>
  );
};

export default HomePageHeader;
