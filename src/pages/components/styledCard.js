import styled from "styled-components";

const white = ({ theme }) => theme.palette.common.white;
const borderLight = ({ theme }) => theme.borderLight;

export const CardContainer = styled.div`
  cursor: pointer;
  background: ${white};
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
  img {
    width: 100%;
    height: 200px;
  }
`;

export const CardDetails = styled.div`
  border-top: ${borderLight};
  padding: 1.6rem 2rem;
  p:last-of-type {
    margin-top: 0.8rem;
  }
`;
