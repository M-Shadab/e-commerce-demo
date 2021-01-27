import styled from "styled-components";

const grey = ({ theme }) => theme.palette.secondary.main;
const mediumgrey = ({ theme }) => theme.palette.grey.medium;
const dark = ({ theme }) => theme.palette.common.black;
const darkcyan = ({ theme }) => theme.palette.cyan.main;
const yelloworange = ({ theme }) => theme.palette.orange.main;
const Pink = ({ theme }) => theme.palette.info.main;

export const Font16 = styled.p`
  font-size: 1.6rem;
  color: ${dark};
  font-weight: ${({ bold }) => (bold ? "bold" : "normal")};
`;

export const Font14 = styled.p`
  font-size: 1.4rem;
  font-weight: ${({ bold }) => (bold ? "bold" : "normal")};
  color: ${({ light, yellowOrange, pink }) =>
    light ? grey : yellowOrange ? yelloworange : pink ? Pink : dark};
  text-transform: ${({ uppercase, lowercase }) =>
    uppercase ? "uppercase" : lowercase ? "lowercase" : "none"};
  text-decoration: ${({ textDecoration }) => textDecoration};
`;

export const Font12 = styled.p`
  font-size: 1.2rem;
  font-weight: ${({ bold }) => (bold ? "bold" : "normal")};
  color: ${({ light, mediumGrey }) =>
    light ? grey : mediumGrey ? mediumgrey : dark};
  text-transform: ${({ uppercase, lowercase }) =>
    uppercase ? "uppercase" : lowercase ? "lowercase" : "none"};
`;

export const Font10 = styled.p`
  font-size: 1rem;
  font-weight: ${({ bold }) => (bold ? "bold" : "normal")};
  color: ${({ darkCyan, pink }) => (darkCyan ? darkcyan : pink ? Pink : dark)};
  text-transform: ${({ uppercase, lowercase }) =>
    uppercase ? "uppercase" : lowercase ? "lowercase" : "none"};
`;

export const Font8 = styled.p`
  font-size: 0.8rem;
  font-weight: ${({ bold }) => (bold ? "bold" : "normal")};
  color: ${({ darkCyan, pink }) => (darkCyan ? darkcyan : pink ? Pink : dark)};
  text-transform: ${({ uppercase, lowercase }) =>
    uppercase ? "uppercase" : lowercase ? "lowercase" : "none"};
`;
