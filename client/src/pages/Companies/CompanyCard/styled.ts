import styled from "styled-components";

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  max-height: 384px;
  height: 100%;
`;

export const Img = styled.div<{ $backgroundImg: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 25px;
  box-shadow: 0px 4px 4px 0px #00000040;
  width: 466px;
  background-image: url(${(props) => props.$backgroundImg});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  height: 312px;
  transition: 0.2s linear;

  &:hover {
    box-shadow: 0px 4px 4px 2px #4c7bff;
  }
`;

export const Title = styled.p`
  font-size: 1.5rem;
`;
