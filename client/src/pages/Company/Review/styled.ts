import styled from "styled-components";

export const Wrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* gap: 20px; */
  max-width: 1126px;
  width: 100%;
  /* min-height: 279px; */
  height: 100%;
  padding: 1.5rem 1.75rem;
  border: 1px solid #eae9e9;
  background-color: #fdfdfd;
  border-radius: 25px;
`;

export const UserImg = styled.div<{ $backgroundImg: string }>`
  display: flex;
  align-self: flex-start;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-image: url(${(props) => props.$backgroundImg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  margin-right: 1.75rem;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

export const UserName = styled.p`
  font-size: 1.15rem;
  margin-right: 0.75rem;
`;
export const Description = styled.p`
  font-size: 1rem;
  margin-left: calc(1.75rem + 60px);
`;
