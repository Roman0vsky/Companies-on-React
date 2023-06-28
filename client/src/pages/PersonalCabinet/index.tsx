import {
  ButtonContainer,
  CardContainer,
  Container,
  Form,
  Inner,
  InputContainer,
  InputErrorBox,
  UserImg,
  UserInfo,
  UserText,
  UserTextBox,
  Wrap,
} from "./styled";
import {
  Button,
  ContentContainer,
  ErrorMessage,
  Hr,
  Input,
  Label,
  Title,
} from "src/commonStyles";
import { SubmitHandler, useForm } from "react-hook-form";
import CompanyCard from "../Companies/CompanyCard/CompanyCard";
import { useSelector } from "react-redux";
import { IStore } from "src/store/interfaces/store.interface";
import { getItem } from "src/utils/local-storage";
import { redirect } from "react-router-dom";
import { APP_ROUTES } from "src/utils/constants";
import { JWTPayload } from "src/utils/interfaces/jwt-payload.interface";
import store from "src/store";
import { setUser } from "src/store/actions";
import UsersService from "src/utils/api/services/Users";
import jwt from "jwt-decode";
import { useDispatch } from "react-redux";

interface IFormInput {
  firstName: string;
  lastName: string;
  birthday: string;
  sex: string;
  login: string;
  email: string;
  password: string;
  passwordConfirm: string;
}

export default function PersonalCabinet() {
  const user = useSelector((store: IStore) => store.auth.user);
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    if (!user) return;

    const newUser = { ...user };

    const {
      firstName,
      lastName,
      birthday: dob,
      sex,
      email,
      password,
      passwordConfirm,
    } = data;

    console.log(`<${password}>`);
    

    if (password !== passwordConfirm) {
      reset();
      return;
    }

    if (firstName) {
      newUser.firstName = firstName;
    }
    if (lastName) {
      newUser.lastName = lastName;
    }
    if (dob) {
      newUser.dob = dob;
    }
    if (sex) {
      newUser.sex = sex;
    }
    if (email) {
      newUser.email = email;
    }
    if (password) {
      console.log(1);
            
      newUser.password = password;
    }

    await UsersService.updateUser(newUser);
    dispatch(setUser(newUser));
    reset();
  };

  return (
    <Wrap>
      <ContentContainer>
        <Title>Личный кабинет</Title>
        <Hr />
        <Inner>
          <UserInfo>
            <UserImg $backgroundImg="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80" />
            <UserTextBox>
              <UserText>
                {user?.firstName} {user?.lastName}
              </UserText>
              <UserText>id: {user?.id}</UserText>
            </UserTextBox>
          </UserInfo>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Container>
              <InputContainer>
                <Label htmlFor="firstName" $height="43px">
                  Имя
                </Label>
                <InputErrorBox>
                  <Input
                    {...register("firstName", {
                      required: { value: true, message: "Заполните поле" },
                      pattern: {
                        value: /^[A-Za-zА-Яа-я]+$/,
                        message: "Только буквы",
                      },
                      maxLength: { value: 50, message: "Максимум 50 букв" },
                    })}
                    id="firstName"
                    $width="349px"
                    autoComplete="off"
                    defaultValue={user?.firstName || ""}
                  />
                  <ErrorMessage>{errors.firstName?.message}</ErrorMessage>
                </InputErrorBox>
              </InputContainer>
              <InputContainer>
                <Label htmlFor="lastName" $height="43px">
                  Фамилия
                </Label>
                <InputErrorBox>
                  <Input
                    {...register("lastName", {
                      required: { value: true, message: "Заполните поле" },
                      pattern: {
                        value: /^[A-Za-zА-Яа-я]+$/,
                        message: "Только буквы",
                      },
                      maxLength: { value: 50, message: "Максимум 50 букв" },
                    })}
                    id="lastName"
                    $width="349px"
                    autoComplete="off"
                    defaultValue={user?.lastName || ""}
                  />
                  <ErrorMessage>{errors.lastName?.message}</ErrorMessage>
                </InputErrorBox>
              </InputContainer>
            </Container>
            <Container>
              <InputContainer>
                <Label htmlFor="birthday" $height="43px">
                  Дата рождения
                </Label>
                <InputErrorBox>
                  <Input
                    {...register("birthday", {
                      required: { value: true, message: "Заполните поле" },
                    })}
                    id="birthday"
                    $width="349px"
                    autoComplete="off"
                    defaultValue={user?.dob || ""}
                  />
                  <ErrorMessage>{errors.birthday?.message}</ErrorMessage>
                </InputErrorBox>
              </InputContainer>
              <InputContainer>
                <Label htmlFor="sex" $height="43px">
                  Пол
                </Label>
                <InputErrorBox>
                  <Input
                    {...register("sex", {
                      required: { value: true, message: "Заполните поле" },
                      pattern: {
                        value: /^[A-Za-zА-Яа-я]+$/,
                        message: "Только буквы",
                      },
                      maxLength: { value: 50, message: "Максимум 50 букв" },
                    })}
                    id="sex"
                    $width="349px"
                    autoComplete="off"
                    defaultValue={user?.sex || ""}
                  />
                  <ErrorMessage>{errors.sex?.message}</ErrorMessage>
                </InputErrorBox>
              </InputContainer>
            </Container>
            <Container>
              <InputContainer>
                <Label htmlFor="login" $height="43px">
                  Логин
                </Label>
                <InputErrorBox>
                  <Input
                    {...register("login", {
                      pattern: {
                        value: /^[A-Za-z]+$/,
                        message: "Только английские буквы и цифры",
                      },
                      maxLength: { value: 50, message: "Максимум 50 букв" },
                    })}
                    id="login"
                    $width="753px"
                    autoComplete="off"
                    value={user?.login || ""}
                    disabled={true}
                    readOnly={true}
                    $disabled={true}
                  />
                  <ErrorMessage>{errors.login?.message}</ErrorMessage>
                </InputErrorBox>
              </InputContainer>
            </Container>
            <Container>
              <InputContainer>
                <Label htmlFor="email" $height="43px">
                  E-mail
                </Label>
                <InputErrorBox>
                  <Input
                    {...register("email", {
                      required: { value: true, message: "Заполните поле" },
                      pattern: {
                        value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                        message: "Формат: xxx@yyy.zzz",
                      },
                    })}
                    id="email"
                    $width="753px"
                    autoComplete="off"
                    defaultValue={user?.email || ""}
                  />
                  <ErrorMessage>{errors.email?.message}</ErrorMessage>
                </InputErrorBox>
              </InputContainer>
            </Container>
            <Container>
              <InputContainer>
                <Label htmlFor="password" $height="43px">
                  Новый пароль
                </Label>
                <InputErrorBox>
                  <Input
                    {...register("password", {
                      pattern: {
                        value: /^[A-Za-z0-9]+$/,
                        message: "Только латинские буквы и цифры",
                      },
                      maxLength: { value: 50, message: "Максимум 50 знаков" },
                      required: { value: true, message: "Введите новый пароль" }
                    })}
                    id="password"
                    $width="753px"
                    autoComplete="off"
                    defaultValue={""}
                  />
                  <ErrorMessage>{errors.password?.message}</ErrorMessage>
                </InputErrorBox>
              </InputContainer>
            </Container>
            <Container>
              <InputContainer>
                <Label htmlFor="passwordConfirm" $height="43px">
                  Подтверждение пароля
                </Label>
                <InputErrorBox>
                  <Input
                    {...register("passwordConfirm", {
                      pattern: {
                        value: /^[A-Za-z0-9]+$/,
                        message: "Только латинские буквы и цифры",
                      },
                      maxLength: { value: 50, message: "Максимум 50 знаков" },
                      required: { value: true, message: "Подтвердите новый пароль" }
                    })}
                    id="passwordConfirm"
                    $width="753px"
                    autoComplete="off"
                    defaultValue={""}
                  />
                  <ErrorMessage>{errors.passwordConfirm?.message}</ErrorMessage>
                </InputErrorBox>
              </InputContainer>
            </Container>
            <ButtonContainer>
              <Button $gray>Сменить пароль</Button>
            </ButtonContainer>
            <ButtonContainer>
              <Button type="submit">Сохранить</Button>
            </ButtonContainer>
          </Form>
        </Inner>
        <Title>Ваши компании:</Title>
        <Wrap>
          <ContentContainer>
            <CardContainer>
              <CompanyCard
                key={1}
                imgUrl={"/static/media/company-img.3ee103e2549bf8865a2c.png"}
                name={"Медицинский центр"}
                reviewsScore={4}
              />
              <CompanyCard
                key={2}
                imgUrl={"/static/media/company-img.3ee103e2549bf8865a2c.png"}
                name={"Медицинский центр"}
                reviewsScore={3}
              />
              <CompanyCard
                key={3}
                imgUrl={"/static/media/company-img.3ee103e2549bf8865a2c.png"}
                name={"Медицинский центр"}
                reviewsScore={2}
              />
            </CardContainer>
            {/* {cards.length === 0 && <Container>Нет компаний</Container>} */}
          </ContentContainer>
        </Wrap>
      </ContentContainer>
    </Wrap>
  );
}

export const personalCabinetLoader = async () => {
  const token = getItem("token");
  if (!token) return redirect(APP_ROUTES.LOGIN);

  const payload: JWTPayload = jwt(token);
  let [user] = await Promise.all([UsersService.getUser(+payload.sub)]);

  if (!user.id) return null;

  store.dispatch(setUser(user));

  return user;
};
