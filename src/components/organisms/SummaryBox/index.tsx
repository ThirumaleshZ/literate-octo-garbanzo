import React from "react";
import TypoGraphy from "../../atoms/TypoGraphy/index";
import { Box, Grid } from "@mui/material";
import { MyButton } from "../../atoms/Button/index";
import Slider from "../../atoms/Slider/index";
import { styled } from "@mui/system";
import '../../../utils/index'
import theme from "../../../theme/theme";
import { ThemeProvider } from "styled-components";
import Icon from "../../atoms/Icon";
import infoIcon from "../../../../public/assets/icons/info-circle.svg";


interface SummaryBoxProps {
  sliderValue?:number|undefined;
  term: number;
  selectedcontract: number;
  paybackamount: string;
  rate: string;
  slider: boolean;
  buttonlabel: string;
  totallabel: string;
  value?: number;
  boxheight: string;
  ratepercentage: string;
  totalselectedvalue: string;
  handleReset?: () => void;
  handleChange?: (value: number) => string;
  handleSliderChange?:(event: Event, newValue: number | number[])=>void;
  handleCredit?:()=>void;
  maxValue?:number|undefined,
 totalPayout?:number

}


const SummaryBox = (props: SummaryBoxProps) => {
  const MyBox = styled(Box)({
    color: "white",
    display:'flex',
    flexDirection:'column',
    justifyContent: 'center',
    backgroundColor: '#201F24',
    padding: '32px',
    gap: '10px',
    borderRadius: 12,
    width: "280px",
    height: `${props.boxheight}`,
    border:`${theme.palette.border?.lowemp}`
  });
  const MyGrid = styled(Grid)({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  });
  const SummaryGrid = styled(Grid)({
    display: "flex",
    gap:'10px',
  });
  const IconBox = styled(Box)({
    /* icon/low emp */
    marginTop:'10px',
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    transform: "rotate(-180deg)",
  });


  const RateBox = styled(Box)({
    display: "flex",
    alignItems: "center",
    gap:'5px',
  });  

const handleChange=(val:number)=>{
  return val.toString();
  }


 

  return (
    <ThemeProvider theme={theme}>
      <MyBox
        role="SummaryBox"
        className={`${props.buttonlabel} ${props.totallabel}`}
      >
        <SummaryGrid>
          <TypoGraphy label={"Summary"} />
          <IconBox>
            <Icon src={infoIcon} alt="icon" />
          </IconBox>
        </SummaryGrid>
        <MyGrid>
          <TypoGraphy
            label={"Term"}
            variants="body1"
            style={{ color: theme.palette.text.disabled }}
          />
          <TypoGraphy
            label={props.term + " " + "months"}
            variants="body1"
            style={{ color: theme.palette.text.primary }}
          />
        </MyGrid>
        <MyGrid>
          <TypoGraphy
            label={"Selected Contracts"}
            variants="body1"
            style={{ color: theme.palette.text.disabled }}
          />
          <TypoGraphy
            label={"$ " + props.selectedcontract + ""}
            variants="body1"
            style={{ color: theme.palette.text.primary }}
          />
        </MyGrid>
        {props.slider && (
          <Box>
            <MyGrid>
              <TypoGraphy
                label={"Slide to autoselect"}
                variants="body1"
                style={{ color: theme.palette.text.disabled }}
              />
              <MyButton
                name={"Reset"}
                width={65}
                height={31}
                variant="contained"
                backgroundColor={`${theme.palette.secondary.main}`}
                sx={{
                  borderRadius: "12px",
                  color: theme.palette.text.secondary,
                  padding: "6px 12px",
                  textTransform: "capitalize",
                  fontSize: theme.typography.body1.fontSize,
                }}
                onClick={props.handleReset}
              />
            </MyGrid>
            <Grid>

              <Slider value={props.sliderValue??0} maxValue={props.maxValue??0} onSilderChange={props.handleSliderChange}
              onChange={handleChange} />

              <RateBox>
                <TypoGraphy
                  label={`$${props.value}`}
                  variants="body1"
                  style={{ color: theme.palette.purple?.[400] }}
                />
                <TypoGraphy
                  label={`selected of `}
                  variants="body1"
                  style={{ color: theme.palette.text.disabled }}
                />
                <TypoGraphy
                  label={`$${props.totalselectedvalue}`}
                  variants="body1"
                />
              </RateBox>
            </Grid>
          </Box>
        )}
        <MyGrid>
          <TypoGraphy
            label={"Pay back amount"}
            variants="body1"
            style={{ color: theme.palette.text.disabled }}
          />
          <TypoGraphy
            label={props.paybackamount}
            variants="body1"
            style={{ color: theme.palette.text.primary }}
          />
        </MyGrid>
        <MyGrid>
          <TypoGraphy
            label={"Rate %"}
            variants="body1"
            style={{ color: theme.palette.text.disabled }}
          />
          <RateBox>
            <TypoGraphy
              label={"( " + props.ratepercentage + "% )"}
              variants="body1"
              style={{
                color: theme.palette.text.disabled,
                fontSize: theme.typography.caption.fontSize,
              }}
            />
            <TypoGraphy
              label={props.rate}
              variants="body1"
              style={{ color: theme.palette.text.primary }}
            />
          </RateBox>
        </MyGrid>


        <div style={{ borderTop: "1px solid white" }}></div>


        <MyGrid>
          <TypoGraphy
            label={props.totallabel}
            variants="body1"
            style={{ color: theme.palette.text.disabled }}
          />
          <TypoGraphy
            label={"$ " + props.totalPayout + ""}
            variants="body1"
            style={{ color: theme.palette.text.primary }}
          />
        </MyGrid>


        <br />


        <MyGrid>
          <MyButton
            name={props.buttonlabel}
            width={295}
            height={59}
            variant="contained"
            backgroundColor={`${theme.palette.purple?.[500]}`}
            sx={{
              textTransform: "none",
              fontSize: theme.typography.body1.fontSize,
            }}
            onClick={props.handleCredit}
          />
        </MyGrid>
      </MyBox>
    </ThemeProvider>
  );
};


export default SummaryBox;




