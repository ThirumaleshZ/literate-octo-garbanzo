import React from "react";
import CardItem from "../CardItem";
import calendar from "../../../../public/assets/icons/calendar.svg";
import document from "../../../../public/assets/icons/document-download.svg";
import percentage from "../../../../public/assets/icons/percentage-square.svg";
import Card from "@mui/material/Card";
import { styled } from "@mui/system";
interface Inputprops {
  width: string;
  Cardstyle?: React.CSSProperties;
}
const CardData = ({ width, Cardstyle }: Inputprops) => {
  const carddata = [
    {
      id: 1,
      src: calendar,
      heading1: "Term cap",
      textdata: "12 months",
    },
    {
      id: 2,
      src: document,
      heading1: "Available credit",
      textdata: "$880.0k",
    },
    {
      id: 3,
      src: percentage,
      heading1: "Max interest rate",
      textdata: "12.00%",
    },
  ];
  const Mycard = styled(Card)({
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: width,
    background: "#201F24",
  });

  return (
    <>
      <Mycard data-testid="carddata" sx={Cardstyle}>
        {carddata.map((item) => {
          return (
            <CardItem
              key={item.id}
              heading1={item.heading1}
              src={item.src}
              textdata={item.textdata}
              style={{
                width: "340px",
                height: "259px",
                backgroundColor: "secondary.light",
              }}
            />
          );
        })}
      </Mycard>
    </>
  );
};

export default CardData;
