import styled from "styled-components";

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  background-color: #fff;
  width: 100%;
  padding: 1.5rem 0;
`;

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  column-gap: 20px;
  row-gap: 20px;
  width: 100%;
  margin: 0 auto;

  @media (max-width: 1303px) {
    max-width: 952px;
    width: 100%;
  }

  @media (max-width: 768px) {
    max-width: 628px;
    width: 100%;
  }
`;
