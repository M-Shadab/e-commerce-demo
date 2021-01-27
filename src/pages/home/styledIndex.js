import styled from "styled-components";

const primary = ({ theme }) => theme.palette.primary.main;

export const Container = styled.div`
  padding: 2rem 4.8rem;
  @media (max-width: 576px) {
    padding: 2rem 2.8rem;
  }
`;

export const SearchContainer = styled.div`
  display: flex;
  margin-bottom: 3rem;
  div {
    cursor: pointer;
    margin-left: -4.4rem;
    height: 34px;
    padding: 0 1rem;
    background: ${primary};
    display: flex;
    align-items: center;
    border-radius: 0 4px 4px 0;
  }
`;

export const CardWrapper = styled.div`
  display: grid;
  grid-template: auto / 23.875% 23.875% 23.875% 23.875%;
  gap: 2.8rem 1.5%;

  @media (max-width: 768px) {
    grid-template: auto / 32.333% 32.333% 32.333%;
  }

  @media (max-width: 576px) {
    grid-template: auto / 49.25% 49.25%;
  }
`;
