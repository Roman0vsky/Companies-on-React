import { Img, Title, Wrap } from "./styled";
import { Companies } from "../../../assets/index";
import { StarWrapper, StarsContainer } from "src/commonStyles";

interface Props {
  imgUrl: string;
  name: string;
  reviewsScore: number;
}

export default function CompanyCard(props: Props) {
  return (
    <Wrap>
      <Img $backgroundImg={props.imgUrl || Companies.CompanyImg} />
      <Title>{props.name}</Title>
      <StarsContainer>
        {Array(5)
          .fill(null)
          .map((_, index) => {
            return (
              <StarWrapper
                $isActive={index < props.reviewsScore}
                key={index + 1}
              >
                <Companies.StarRate />
              </StarWrapper>
            );
          })}
      </StarsContainer>
    </Wrap>
  );
}
