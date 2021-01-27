import React, { useState, useEffect } from "react";
import http from "../../services/httpService";
import { useParams } from "react-router-dom";
import {
  Container,
  ImageContainer,
  ReviewDiv,
  PriceDiv,
  ActualPrice,
  OfferTag,
  ColorVariant,
  SizeContainer,
  SizeHeader,
  SizeVariant,
  SmallCircle,
  BtnWrapper,
  DeliveryContainer,
  DeliveryHeader,
  PincodeChecker,
  TermsAndConditions,
} from "./styledIndex";
import { CardContainer } from "../components/styledCard";
import { Font16, Font14, Font12, Font10, Font8 } from "../components/font";
import { Button } from "../components/styledButton";
import Input from "../components/input";
import rateReview from "../../assets/svgs/rateReview.svg";
import chevronRight from "../../assets/svgs/chevronRight.svg";
import localShipping from "../../assets/svgs/localShipping.svg";
import shoppingBag from "../../assets/svgs/shoppingBag.svg";
import bookmark from "../../assets/svgs/bookmark.svg";

const Index = () => {
  const [item, setItem] = useState({});
  const { id, product } = useParams();

  useEffect(() => {
    const getProduct = async () => {
      try {
        const { data } = await http.get("/search", {
          params: {
            id,
            product,
          },
        });
        setItem(data);
      } catch (error) {
        console.log("error: ", error);
      }
    };

    getProduct();
  }, [id, product]);

  const itemThumbnail = (
    <CardContainer>
      <img src={item.thumbnail} alt="item pic" />
    </CardContainer>
  );

  return (
    <Container>
      <ImageContainer>
        {itemThumbnail}
        {itemThumbnail}
        {itemThumbnail}
      </ImageContainer>
      {Object.keys(item).length > 0 && (
        <div>
          <Font16 bold>{item.title}</Font16>
          <Font14>{item.reviews.rating} rating</Font14>
          <ReviewDiv>
            <img src={rateReview} alt="rateReview logo" />
            <Font12 mediumGrey>{item.reviews.total_reviews} Reviews</Font12>
          </ReviewDiv>
          <PriceDiv>
            <div>
              <ActualPrice>
                <Font16 bold>
                  {item.price.current_price.toFixed(2)} {item.price.currency}
                </Font16>
                {item.price.before_price !== 0 && (
                  <Font14 textDecoration="line-through">
                    {item.price.before_price.toFixed(2)} {item.price.currency}
                  </Font14>
                )}
                <Font14 bold yellowOrange uppercase>
                  (70 % Off)
                </Font14>
              </ActualPrice>
              <Font10 darkCyan bold>
                inclusive of all taxes
              </Font10>
            </div>
            <OfferTag>offers ends in 05h:16m:34s</OfferTag>
          </PriceDiv>
          <ColorVariant>
            <Font12 bold>More Color</Font12>
            <div>
              <img src={item.thumbnail} alt="thumbnail" />
              <img src={item.thumbnail} alt="thumbnail" />
            </div>
          </ColorVariant>
          <SizeContainer>
            <SizeHeader>
              <Font12 bold>Select Size (UK Size)</Font12>
              <Font8 bold pink uppercase>
                Size chart
              </Font8>
              <img
                src={chevronRight}
                alt="right arrow"
                width="12"
                height="12"
              />
            </SizeHeader>
            <SizeVariant>
              <SmallCircle>6</SmallCircle>
              <SmallCircle>7</SmallCircle>
              <SmallCircle>8</SmallCircle>
              <SmallCircle>9</SmallCircle>
              <SmallCircle>10</SmallCircle>
              <SmallCircle>12</SmallCircle>
            </SizeVariant>
          </SizeContainer>
          <BtnWrapper>
            <Button largebtn bgPink textWhite>
              <img src={shoppingBag} alt="shoppingBag" width="12" />
              Add to bag
            </Button>
            <Button btn border>
              <img src={bookmark} alt="bookmark" width="12" />
              Wishlist
            </Button>
          </BtnWrapper>
          <DeliveryContainer>
            <DeliveryHeader>
              <Font12 bold uppercase>
                Delivery options
              </Font12>
              <img src={localShipping} alt="localShipping" width="16" />
            </DeliveryHeader>
            <PincodeChecker>
              <Input placeholder="Enter pincode " borderDark />
              <Font14 pink>check</Font14>
            </PincodeChecker>
            <Font10>
              Please enter pincode to check delivery time & pay on delivery
              availabilty
            </Font10>
          </DeliveryContainer>
          <TermsAndConditions>
            <Font12>100% Original Products</Font12>
            <Font12>Free Delivery on order above Rs. 799</Font12>
            <Font12>Pay on Delivery might be available</Font12>
            <Font12>Easy 30 days returns and exchanges</Font12>
            <Font12>Try and Buy might be available</Font12>
          </TermsAndConditions>
        </div>
      )}
    </Container>
  );
};

export default Index;
