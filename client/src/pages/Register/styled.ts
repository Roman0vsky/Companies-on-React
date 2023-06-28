import { Wrapper } from "src/commonStyles";
import styled from "styled-components";

export const Content = styled(Wrapper)`
  max-width: 809px;
  width: 100%;
  min-height: 781px;
  background-color: #fff;
  border-radius: 15px;
  padding: 56px 95px 66px 96px;
`;

export const Title = styled(Wrapper)`
  font-size: 2rem;
  margin-bottom: 47px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  height: 100%;
  width: 100%;
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-top: 33px;
`;

export const Inner = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const Box = styled.div<{ $width?: string; $checkbox?: boolean }>`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  max-width: 618px;
  width: ${(props) => props.$width || "100%"};
  align-self: ${(props) => (props.$checkbox ? "center" : "auto")};
`;
