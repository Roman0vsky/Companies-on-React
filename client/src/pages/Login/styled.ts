import { Wrapper } from "src/commonStyles";
import styled from "styled-components";

export const Content = styled(Wrapper)`
  max-width: 540px;
  width: 100%;
  min-height: 398px;
  background-color: #fff;
  border-radius: 15px;
  padding: 57px 42px 56px 43px;
`;

export const Title = styled(Wrapper)`
  font-size: 2rem;
  margin-bottom: 22px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 22px;
  height: 100%;
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

export const Inner = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;
