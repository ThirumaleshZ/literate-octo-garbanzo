import { Box } from "@mui/material";
import TemplateLayout from "../../../components/templates/templateDesign/index";
import Body from "./Body";
import Header from "./Header";

const Dashboard = () => {
  return (
    <Box data-testid="dashboard">
      <TemplateLayout header={<Header></Header>} children={<Body></Body>} />
    </Box>
  );
};

export default Dashboard;
