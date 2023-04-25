import { Box } from "@mui/material";
import TemplateLayout from "../../../components/templates/templateDesign";
import HomePageChildren from "./homeChildren";
import HomePageHeader from "./homeHeader";

const Home = () => {
  return (
    <Box sx={{ overflow: "hidden" }} data-testid="home">
      <TemplateLayout
        header={<HomePageHeader />}
        children={<HomePageChildren />}
      />
    </Box>
  );
};

export default Home;
