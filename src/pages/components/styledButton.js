import styled from "styled-components";

const borderDark = ({ theme }) => theme.borderDark;
const borderInfo = ({ theme }) => theme.borderInfo;
const borderRadius = ({ theme }) => theme.borderRadius;
const white = ({ theme }) => theme.palette.common.white;
const dark = ({ theme }) => theme.palette.common.black;
const pink = ({ theme }) => theme.palette.info.main;

export const Button = styled.button`
  font-size: 1.2rem;
  font-weight: bold;
  text-align: center;
  text-transform: uppercase;
  border-radius: ${borderRadius};
  border: ${({ border, bgPink }) => (border ? borderDark : borderInfo)};
  color: ${({ textWhite }) => (textWhite ? white : dark)};
  background: ${({ bgPink }) => (bgPink ? pink : white)};
  padding: ${({ largebtn, btn }) =>
    largebtn ? "0.8rem 4.8rem" : btn ? "0.8rem 2.8rem" : "0.8rem 1rem"};
  outline: 0;
  display: flex;
  align-items: center;
  white-space: nowrap;
  cursor: pointer;
  opacity: 0.8;
  img {
    margin-right: 0.6rem;
  }
  :hover {
    opacity: 1;
  }
`;
