import styled, { css } from "styled-components";

const borderDark = ({ theme }) => theme.borderDark;
const rounded = ({ theme }) => theme.rounded;
const lightPink = ({ theme }) => theme.palette.pink.light;

const FlexAlignCenter = css`
  display: flex;
  align-items: center;
`;

export const Container = styled.div`
  display: grid;
  grid-template: auto / 60% 38%;
  gap: 2.8rem 2%;

  padding: 4rem 0 2rem 4.8rem;
  @media (max-width: 768px) {
    grid-template: auto / 100%;
    padding: 2rem 2rem;
  }
`;

export const ImageContainer = styled.div`
  display: grid;
  grid-template: 200px 200px / 49.25% 49.25%;
  gap: 1.5% 1.5%;

  @media (max-width: 576px) {
    grid-template: 200px 200px / 100%;
  }
`;

export const ReviewDiv = styled.div`
  display: inline-flex;
  border: ${borderDark};
  padding: 0.4rem 0.6rem;
  margin: 1.2rem 0 1rem 0;
  img {
    width: 1.6rem;
  }
  p {
    margin-left: 0.8rem;
  }
`;

export const PriceDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  border-top: ${borderDark};
  padding-top: 0.8rem;
  margin-bottom: 1rem;
`;

export const ActualPrice = styled.div`
  ${FlexAlignCenter};
  flex-wrap: wrap;
  margin-bottom: 0.6rem;
  > p:not(:first-child) {
    margin-left: 1rem;
  }
`;

export const OfferTag = styled.div`
  background: ${lightPink};
  padding: 0.4rem 0.8rem;
`;

export const ColorVariant = styled.div`
  margin-bottom: 2.4rem;
  > p {
    margin-bottom: 1.6rem;
  }
  > div {
    display: flex;
    img {
      cursor: pointer;
      width: 32px;
      height: 32px;
      border: ${borderDark};
      border-radius: ${rounded};
      :not(:last-child) {
        margin-right: 1rem;
      }
    }
  }
`;

export const SizeContainer = styled.div`
  margin-bottom: 2rem;
`;

export const SizeHeader = styled.div`
  ${FlexAlignCenter};
  margin-bottom: 1.6rem;
  p:nth-of-type(2) {
    margin-left: 2.4rem;
  }
`;

export const SizeVariant = styled.div`
  ${FlexAlignCenter};
  > div:not(:last-child) {
    margin-right: 1rem;
  }
`;

export const SmallCircle = styled.div`
  border-radius: ${rounded};
  border: ${borderDark};
  width: 32px;
  height: 32px;
  ${FlexAlignCenter};
  justify-content: center;
  cursor: pointer;
`;

export const BtnWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;

  margin-bottom: 2rem;

  button:first-child {
    margin-right: 1rem;
    @media (max-width: 1080px) {
      margin-bottom: 1.2rem;
    }
  }
`;

export const DeliveryContainer = styled.div`
  margin-bottom: 2rem;
  input {
    width: 50%;
  }
`;

export const DeliveryHeader = styled.div`
  ${FlexAlignCenter};
  margin-bottom: 1rem;
  img {
    margin-left: 1rem;
  }
`;

export const PincodeChecker = styled.div`
  ${FlexAlignCenter};
  margin-bottom: 0.6rem;
  p {
    cursor: pointer;
    margin-left: -5rem;
  }
`;

export const TermsAndConditions = styled.div`
  margin-bottom: 3rem;
  p {
    margin-bottom: 0.6rem;
  }
`;
