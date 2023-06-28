import styled from "styled-components";

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: #fff;
  height: 100%;
  padding: 1.5rem 0;
`;

export const Inner = styled.div`
  border-radius: 25px;
  border: 1px solid #ecebeb;
  width: 100%;
  height: 100%;
  padding: 40px;
  margin-bottom: 20px;
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  height: 150px;
  max-width: 753px;
  width: 100%;
  margin: 0 auto 2rem;
`;

export const UserText = styled.p`
  font-size: 1.25rem;
`;

export const UserTextBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

export const UserImg = styled.div<{ $backgroundImg: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 150px;
  max-width: 150px;
  width: 100%;
  background-image: url(${(props) => props.$backgroundImg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  max-height: 150px;
  height: 100%;
  margin-right: 30px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 753px;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  row-gap: 14px;
`;

export const Container = styled.div`
  display: flex;
  column-gap: 55px;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 19px;
  max-width: 753px;
  width: 100%;
  max-height: 163px;
  height: 100%;
`;

export const InputErrorBox = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 70px;
  height: 100%;
`;

export const ButtonContainer = styled.div`
  margin-top: 30px;
`;

export const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 30px 40px;
  margin: 0 auto;
  width: 100%;
`;
