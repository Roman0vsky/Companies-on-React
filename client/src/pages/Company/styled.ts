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

export const Img = styled.div<{ $backgroundImg: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 25px;
  max-width: 800px;
  width: 100%;
  background-image: url(${(props) => props.$backgroundImg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  height: 300px;
  margin: 0 auto;
`;

export const Text = styled.p`
  max-width: 1115px;
  width: 100%;
  font-size: 1.1rem;
  margin-bottom: 2.25rem;
`;

export const Reviews = styled.div`
  display: flex;
  justify-content: center;
  width: 250px;
  font-size: 1.1rem;
  border-bottom: 1px solid #000;
  padding: 2px;
  margin: 0.65rem auto 2.9rem;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1126px;
  width: 100%;
  gap: 20px;
`;

export const TextArea = styled.textarea`
  height: 150px;
  max-width: 757px;
  width: 100%;
  padding: 17px 11px;
  background-color: #eae9e9;
  border: 1px solid #bbbbbb;
  border-radius: 15px;
  font-size: 1.25rem;
  margin-right: 20px;
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
`;

export const Form = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
`;

export const TextAreaBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-right: 20px;
`;
