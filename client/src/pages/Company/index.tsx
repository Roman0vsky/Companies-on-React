import { useState } from "react";
import {
  Container,
  Form,
  Img,
  Reviews,
  Text,
  TextArea,
  TextAreaBox,
  Wrap,
} from "./styled";
import { Wrap as Wrapp } from "./Review/styled";
import Review from "./Review/Review";
import {
  Button,
  Hr,
  Title,
  StarsContainer,
  StarWrapper,
  ContentContainer,
  ErrorMessage,
} from "src/commonStyles";
import { redirect } from "react-router-dom";
import { getItem } from "src/utils/local-storage";
import { APP_ROUTES } from "src/utils/constants";
import UsersService from "src/utils/api/services/Users";
import { JWTPayload } from "src/utils/interfaces/jwt-payload.interface";
import jwt from "jwt-decode";
import store from "src/store";
import { setActivatedCompany, setUser } from "src/store/actions";
import { Companies } from "../../assets/index";
import CompaniesService from "src/utils/api/services/Companies";
import { IStore } from "src/store/interfaces/store.interface";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { IReview } from "src/utils/interfaces/review.interface";
import { SubmitHandler, useForm } from "react-hook-form";

interface IFormInput {
  review: string;
}

const ReviewsList: IReview[] = [
  {
    id: 1,
    text: "Все понравилось. И персонал, и месторождение, и печеньки с кофе, и чистота в помещениях. Молодцы. Уходить не хотелось",
    score: 5,
    user: {
      id: -1,
      name: "Анна Коляго",
      imgUrl:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80",
    },
  },
  {
    id: 2,
    text: "Персонал хамло!",
    score: 2,
    user: {
      id: -1,
      name: "Наталья Хамлова",
      imgUrl: "https://oir.mobi/uploads/posts/2020-01/1579144434_1-1.jpg",
    },
  },
  {
    id: 3,
    text: "Очень крутая компания! Поддержка суперская, молниеносная, спасибо большое ребятам за такой сервис и высшую культуру обслуживания клиентов! Так держать! Всем советуем)",
    score: 4,
    user: {
      id: 1,
      name: "Top Gangster",
      imgUrl: "https://eduenglishpassport.sru.ac.th/assets/images/users/1.jpg",
    },
  },
];

export default function Company() {
  const user = useSelector((store: IStore) => store.auth.user);
  const company = useSelector(
    (store: IStore) => store.companies.activatedCompany
  );
  const ReviewsScore = company?.reviewsScore || 4;
  const [reviews, setReviews] = useState<IReview[]>(ReviewsList);
  const [reviewsScore, setReviewsScore] = useState<number>(ReviewsScore);

  const reviewsItems = reviews.map((review) => (
    <Review key={review.id} data={review} />
  ));

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    setReviews((prevState) => {
      if (!user) return prevState;

      const newState = [...prevState];
      newState.push({
        id: prevState[prevState.length - 1].id + 1,
        text: `${data.review}`,
        score: 5,
        user: {
          id: user.id,
          name: user.firstName + " " + user.lastName,
          imgUrl:
            "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80",
        },
      });
      reset({ review: "" });
      return newState;
    });
  };

  return (
    <Wrap>
      <ContentContainer>
        <Title>{company?.name}</Title>
        <Hr />
        <Img $backgroundImg={company?.imgUrl || Companies.CompanyImg} />
        <ReviewsScoreContainer>
          <span>Рейтинг:</span>
          <StarsContainer>
            {Array(5)
              .fill(null)
              .map((_, index) => index + 1)
              .map((starNum, index) => {
                return (
                  <StarWrapper key={starNum} $isActive={index < reviewsScore}>
                    <Companies.StarRate />
                  </StarWrapper>
                );
              })}
          </StarsContainer>
        </ReviewsScoreContainer>
        <Text>{company?.description}</Text>
        <Text>{company?.address}</Text>
        <Reviews>Отзывы</Reviews>
        <Container>
          {reviewsItems}
          <Wrapp>
            <Form onSubmit={handleSubmit(onSubmit)}>
              <TextAreaBox>
                <TextArea
                  {...register("review", {
                    required: { value: true, message: "Заполните поле" },
                  })}
                  placeholder="Введите комментарий"
                />
                <ErrorMessage>{errors.review?.message}</ErrorMessage>
              </TextAreaBox>
              <Button type="submit">Отправить</Button>
            </Form>
          </Wrapp>
        </Container>
      </ContentContainer>
    </Wrap>
  );
}

const ReviewsScoreContainer = styled.div`
  display: flex;
  column-gap: 0.5rem;
  align-items: center;
  justify-content: center;
  margin: 1.5rem 0;
`;

export const companyLoader = async ({ params }: any) => {
  const token = getItem("token");
  if (!token) return redirect(APP_ROUTES.LOGIN);

  const payload: JWTPayload = jwt(token);
  let [user, company] = await Promise.all([
    UsersService.getUser(+payload.sub),
    CompaniesService.getCompany({ id: params.id }),
  ]);
  if (!user.id) return null;

  store.dispatch(setUser(user));
  store.dispatch(setActivatedCompany(company));

  return user;
};
