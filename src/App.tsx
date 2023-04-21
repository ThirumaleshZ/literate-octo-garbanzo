import { ThemeProvider } from "@mui/material/styles";
import { BrowserRouter,Routes, Route } from "react-router-dom";
import Home from "./pages/homePage/home";
import NewCashKick from "./pages/NewCashKick";
import CashAccelaration from "./pages/CashAccelaration";
import { ReviewCashKick } from "./pages/ReviewCashKick";
import Dashboard from "./pages/homePage/dashboard";
import theme from "./theme/theme";
import { Page404 } from "./pages/Page404";
import { createContext, useState } from "react";

export const UserContext = createContext<any>("")
const App = () => {
  const [isActive, setIsActive] = useState("home");
  return (
    <ThemeProvider theme={theme}>
      <UserContext.Provider value={[isActive, setIsActive] }>
      <BrowserRouter>
      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/newCashKick" element={<NewCashKick />} />
          <Route path="/cashAccleration" element={<CashAccelaration />} />
          <Route path="/reviewCashKick" element={<ReviewCashKick />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/*" element={<Page404/>} />
        </Routes>
       
      </BrowserRouter>
       </UserContext.Provider>
    </ThemeProvider>
  );
};

export default App;




