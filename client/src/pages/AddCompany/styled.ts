import styled from "styled-components";

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1127px;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  padding: 30px 30px 0;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1000px;
  width: 100%;
  height: 100%;
  gap: 15px;
  padding: 40px 0 30px;
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 10px;
  max-width: 1000px;
  height: 100%;
  width: 100%;
`;

export const TextArea = styled.textarea`
  height: 184px;
  max-width: 757px;
  width: 100%;
  padding: 18px 14px 19px;
  background-color: #eae9e9;
  border: 1px solid #bbbbbb;
  border-radius: 15px;
  font-size: 1.5rem;
  resize: none;

  &::placeholder {
    /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: #bbbbbb;
    opacity: 1; /* Firefox */
  }

  &:-ms-input-placeholder {
    /* Internet Explorer 10-11 */
    color: #bbbbbb;
  }

  &::-ms-input-placeholder {
    /* Microsoft Edge */
    color: #bbbbbb;
  }

  &:focus {
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    outline: none;
  }
`;

export const BoxBtn = styled.div`
  margin-top: 40px;
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 757px;
`;
