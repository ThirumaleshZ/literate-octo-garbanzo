import { Grid, Paper } from "@mui/material";
import { ReactNode } from "react";
import theme from "../../../theme/theme";
import SideBar from "../../organisms/sideBar";

interface templateLayoutProps {
  header: ReactNode;
  children: ReactNode;
}

const TemplateLayout = ({ header, children }: templateLayoutProps) => {
  return (
    <Paper
      sx={{
        height: "106vh",
        width:'100%',
        backgroundColor: theme.palette.secondary.contrastText,
      }}
    >
      <Grid container direction="row" >
        <Grid item xs={2} sx={{position:'fixed'}}>
          <SideBar width="245px" height="106vh" />
        </Grid>
        <Grid item xs={10} paddingX={4} sx={{marginLeft:"225px"}} >
          <Grid
            container
            direction="row"
            alignItems="center"
            display="flex"
            justifyContent="space-between"
          >
            <Grid item direction="row" paddingTop={4} width='100%'>
              {header}
            </Grid>
          </Grid>
          <Grid container paddingY={2}>
            <Grid item xs={true}>
              {children}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default TemplateLayout;