
import TemplateLayout from "../../components/templates/templateDesign";
import HeaderComponent from "./headerComponent";

import TableData from "./tableData";

const NewCashKick = () => {
  return (
    <TemplateLayout
      data-testid="main"
      header={<HeaderComponent />}
      children={<TableData />}
    />
  );
};

export default NewCashKick;
