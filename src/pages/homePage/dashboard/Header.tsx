
import { Box } from "@mui/material";
import Profile from "../../../components/molecules/Profile";
import Greetings from "./Date";


const Header = () => {
    return (
        <Box sx={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}>
            <Greetings />
            <Box sx={{ flex: 1, flexGrow: 1 }}></Box>
            <Profile />
        </Box>
    );
}

export default Header;