import React from "react";
import { CardContainer, CardDetails } from "./styledCard";
import { Font16, Font14 } from "./font";

const Card = ({ label, description, priceTag, imgSrc, ...rest }) => (
  <CardContainer {...rest}>
    <img src={imgSrc} alt="item pic" />
    <CardDetails>
      <Font16 bold>{label}</Font16>
      <Font14>{description}</Font14>
      <Font14>{priceTag}</Font14>
    </CardDetails>
  </CardContainer>
);

export default Card;
