import {
  Button,
  ErrorMessage,
  Input,
  Label,
  Page,
  Wrapper,
} from "src/commonStyles";
import { Box, Container, Content, Form, Inner, Title } from "./styled";
import { useForm, SubmitHandler } from "react-hook-form";
import { Navigate, redirect, useNavigate } from "react-router-dom";
import { APP_ROUTES } from "src/utils/constants";
import AuthService from "src/utils/api/services/Auth";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "src/store/actions";
import { IStore } from "src/store/interfaces/store.interface";
import { useEffect } from "react";
import UsersService from "src/utils/api/services/Users";
import { JWTPayload } from "src/utils/interfaces/jwt-payload.interface";
import { getItem } from "src/utils/local-storage";
import jwt from "jwt-decode";
import store from "src/store";

interface IFormInput {
  firstName: string;
  lastName: string;
  email: string;
  login: string;
  password: string;
  passwordConfirm: string;
  manager: boolean;
}

export default function Register() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // useEffect(() => {
  //   (async function () {
  //     const token = getItem("token");
  //     if (!token) return;

  //     const payload: JWTPayload = jwt(token);
  //     const user = await UsersService.getUser(+payload.sub);

  //     if (!user.id) return;

  //     dispatch(setUser(user));
  //     navigate(APP_ROUTES.DASHBOARD, { replace: true });
  //   })();
  // }, [dispatch, navigate]);

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
    setError,
  } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    const {
      firstName,
      lastName,
      email,
      login,
      password,
      passwordConfirm,
      manager,
    } = data;
    const roles = ["user"];

    if (password !== passwordConfirm) {
      setError("root", {
        type: "password confirmation",
        message: "Passwords don't match",
      });
      return;
    }

    try {
      const user = await AuthService.register({
        email,
        password,
        login,
        firstName,
        lastName,
        roles,
      });
      dispatch(setUser(user));
    } catch (err: any) {
      setError("root", { type: "400", message: err.message });
      return;
    }

    reset({
      firstName: "",
      lastName: "",
      email: "",
      login: "",
      password: "",
      passwordConfirm: "",
      manager: false,
    });

    return navigate(APP_ROUTES.CATALOG, { replace: true });
  };

  const goToLogin = () => navigate(APP_ROUTES.LOGIN);

  return (
    <Page>
      <Content>
        <Wrapper className='width100proc'>
          <Title>Регистрация</Title>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Box>
              <Label htmlFor='firstName'>Имя</Label>
              <Inner>
                <Input
                  {...register("firstName", {
                    required: { value: true, message: "Введите имя" },
                    pattern: {
                      value: /^[A-Za-zА-Яа-я]+$/,
                      message: "Только буквы",
                    },
                    maxLength: { value: 50, message: "Максимум 50 букв" },
                  })}
                  placeholder='Имя'
                  $width='350px'
                  autoComplete='off'
                  id='firstName'
                />
                <ErrorMessage>{errors.firstName?.message}</ErrorMessage>
              </Inner>
            </Box>
            <Box>
              <Label htmlFor='lastName'>Фамилия</Label>
              <Inner>
                <Input
                  {...register("lastName", {
                    required: { value: true, message: "Введите фамилию" },
                    pattern: {
                      value: /^[A-Za-zА-Яа-я]+$/,
                      message: "Только буквы",
                    },
                    maxLength: { value: 50, message: "Максимум 50 букв" },
                  })}
                  placeholder='Фамилия'
                  $width='350px'
                  autoComplete='off'
                  id='lastName'
                />
                <ErrorMessage>{errors.lastName?.message}</ErrorMessage>
              </Inner>
            </Box>
            <Box>
              <Label htmlFor='email'>Почта</Label>
              <Inner>
                <Input
                  {...register("email", {
                    required: { value: true, message: "Введите почту" },
                    pattern: {
                      value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                      message: "Формат: xxx@yyy.zzz",
                    },
                  })}
                  placeholder='Почта'
                  $width='350px'
                  autoComplete='off'
                  id='email'
                />
                <ErrorMessage>{errors.email?.message}</ErrorMessage>
              </Inner>
            </Box>
            <Box>
              <Label htmlFor='login'>Логин</Label>
              <Inner>
                <Input
                  {...register("login", {
                    required: { value: true, message: "Введите логин" },
                    pattern: {
                      value: /^[A-Za-z0-9]+$/,
                      message: "Только латинские буквы и цифры",
                    },
                    maxLength: { value: 50, message: "Максимум 50 знаков" },
                  })}
                  placeholder='Логин'
                  $width='350px'
                  autoComplete='off'
                  id='login'
                />
                <ErrorMessage>{errors.login?.message}</ErrorMessage>
              </Inner>
            </Box>
            <Box>
              <Label htmlFor='password'>Пароль</Label>
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
                  $width='350px'
                  autoComplete='off'
                  id='password'
                />
                <ErrorMessage>{errors.password?.message}</ErrorMessage>
              </Inner>
            </Box>
            <Box>
              <Label htmlFor='passwordConfirm'>Подтвердите пароль</Label>
              <Inner>
                <Input
                  {...register("passwordConfirm", {
                    required: { value: true, message: "Подтвердите пароль" },
                  })}
                  placeholder='Подтвердите пароль'
                  $width='350px'
                  autoComplete='off'
                  id='passwordConfirm'
                />
                <ErrorMessage>{errors.passwordConfirm?.message}</ErrorMessage>
              </Inner>
            </Box>
            <Box $width='430px' $checkbox>
              <Label htmlFor='manager' $checkbox>
                Вы менеджер?
              </Label>
              <Input
                {...register("manager")}
                $width='35px'
                $height='35px'
                autoComplete='off'
                id='manager'
                type='checkbox'
              />
            </Box>
            <Container>
              <Button $width='126px' $white onClick={goToLogin}>
                Войти
              </Button>
              <Button type='submit' $width='210px'>
                Регистрация
              </Button>
            </Container>
          </Form>
        </Wrapper>
      </Content>
    </Page>
  );
}

export const registerLoader = async () => {
  const token = getItem("token");
  if (!token) return null;

  const payload: JWTPayload = jwt(token);
  const user = await UsersService.getUser(+payload.sub);

  if (!user.id) return null;

  store.dispatch(setUser(user));
  return redirect(APP_ROUTES.CATALOG);
};
