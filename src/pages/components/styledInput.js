import styled from "styled-components";

const borderdark = ({ theme }) => theme.borderDark;
const borderPrimary = ({ theme }) => theme.borderPrimary;
const borderRadius = ({ theme }) => theme.borderRadius;

export const StyledInput = styled.input`
  width: 100%;
  padding: 0.8rem 0.8rem;
  border: ${({ borderDark }) => (borderDark ? borderdark : borderPrimary)};
  border-radius: ${borderRadius};
  outline: none;
`;
