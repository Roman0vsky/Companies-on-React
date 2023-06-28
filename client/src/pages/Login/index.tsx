import { Button, ErrorMessage, Input, Page, Wrapper } from "src/commonStyles";
import { Container, Content, Form, Inner, Title } from "./styled";
import { useForm, SubmitHandler } from "react-hook-form";
import { Navigate, useNavigate, redirect } from "react-router-dom";
import { API_ENDPOINTS, APP_ROUTES } from "src/utils/constants";
import AuthService from "src/utils/api/services/Auth";
import { useDispatch } from "react-redux";
import { setUser } from "src/store/actions";
import { useSelector } from "react-redux";
import { IStore } from "src/store/interfaces/store.interface";
import { useEffect } from "react";
import UsersService from "src/utils/api/services/Users";
import { JWTPayload } from "src/utils/interfaces/jwt-payload.interface";
import { getItem } from "src/utils/local-storage";
import jwt from "jwt-decode";
import store from "src/store";
import jwtDecode from "jwt-decode";

interface IFormInput {
  email: string;
  password: string;
}

export default function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
    setError,
  } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    const { email, password } = data;

    try {
      const user = await AuthService.login({ email, password });
      dispatch(setUser(user));
    } catch (err: any) {
      setError("root", { type: "400", message: err.message });
      return;
    }

    reset({
      email: "",
      password: "",
    });

    return navigate(APP_ROUTES.CATALOG);
  };

  const goToRegistr = () => navigate(APP_ROUTES.REGISTER);

  return (
    <Page>
      <Content>
        <Wrapper>
          <Title>Вход</Title>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Inner>
              <Input
                {...register("email", {
                  required: { value: true, message: "Введите email" },
                  pattern: {
                    value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                    message: "Формат: xxx@yyy.zzz",
                  },
                  maxLength: { value: 50, message: "Максимум 50 знаков" },
                })}
                placeholder='Email'
                $width='455px'
                autoComplete='off'
              />
              <ErrorMessage>{errors.email?.message}</ErrorMessage>
            </Inner>
            <Inner>
              <Input
                {...register("password", {
                  required: { value: true, message: "Введите пароль" },
                  pattern: {
                    value: /^[A-Za-z0-9]+$/,
                    message: "Только латинские буквы и цифры",
                  },
                  maxLength: { value: 50, message: "Максимум 50 знаков" },
                })}
                placeholder='Пароль'
                $width='455px'
                autoComplete='off'
              />
              <ErrorMessage>{errors.password?.message}</ErrorMessage>
            </Inner>
            <Container>
              <Button type='submit' $width='126px' $white>
                Войти
              </Button>
              <Button $width='210px' onClick={goToRegistr}>
                Регистрация
              </Button>
            </Container>
            <ErrorMessage>{errors.root?.message}</ErrorMessage>
          </Form>
        </Wrapper>
      </Content>
    </Page>
  );
}

export const loginLoader = async () => {
  const token = getItem("token");
  if (!token) return null;

  const payload: JWTPayload = jwt(token);
  const user = await UsersService.getUser(+payload.sub);

  if (!user.id) return null;

  store.dispatch(setUser(user));
  return redirect(APP_ROUTES.CATALOG);
};
