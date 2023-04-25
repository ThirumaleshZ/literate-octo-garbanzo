import { Box } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { BASE_URL } from "../../utils";
import Dashboard from "./dashboard";
import Home from "./home";

const HomePage = () => {
  const [payments, setPayments] = useState([]);

  useEffect(() => {
    axios
      .get(`${BASE_URL}payments`, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
          "Access-Control-Allow-Methods": "*",
          "Access-Control-Allow-Headers": "*",
        },
      })
      .then((response) => {
        setPayments(response.data);
      });
  }, []);

  return (
    <Box data-testid="homePage">
      {payments.length === 0 ? <Home /> : <Dashboard />}
    </Box>
  );
};

export default HomePage;
