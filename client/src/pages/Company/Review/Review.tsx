import React from "react";
import { Container, Description, UserImg, UserName, Wrap } from "./styled";
import { StarWrapper, StarsContainer } from "src/commonStyles";
import { Companies } from "../../../assets/index";
import { IReview } from "src/utils/interfaces/review.interface";
import styled from "styled-components";

interface Props {
  data: IReview;
}

export default function Review({ data }: Props) {
  return (
    <Wrap>
      <Container>
        <ReviewHeader>
          <UserImg $backgroundImg={data.user.imgUrl} />
          <UserName>{data.user.name}</UserName>
          <StarsContainer>
            {Array(5)
              .fill(null)
              .map((_, index) => index + 1)
              .map((starNum, index) => {
                return (
                  <StarWrapper key={starNum} $isActive={index < data.score}>
                    <Companies.StarRate />
                  </StarWrapper>
                );
              })}
          </StarsContainer>
        </ReviewHeader>
        <Description>{data.text}</Description>
      </Container>
    </Wrap>
  );
}

const ReviewHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`;
