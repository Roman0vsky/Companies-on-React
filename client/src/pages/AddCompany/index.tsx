import { Button, ErrorMessage, Label } from "src/commonStyles";
import { Box, BoxBtn, Container, Form, TextArea, Wrap } from "./styled";
import { Hr, Title } from "src/commonStyles";
import { Input } from "src/commonStyles";
import { SubmitHandler, useForm } from "react-hook-form";

interface IFormInput {
  category: string;
  title: string;
  description: string;
  address: string;
  logo: any;
}

export default function AddCompany() {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log(data);
    reset({
      category: "",
      title: "",
      description: "",
      address: "",
      logo: undefined,
    });
  };

  return (
    <Wrap>
      <Title>Добавить объект</Title>
      <Hr />
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Container>
          <Label htmlFor="category">Категория</Label>
          <Box>
            <Input
              {...register("category", {
                required: { value: true, message: "Заполните поле" },
              })}
              $width="757px"
              $height="75px"
              id="category"
            />
            <ErrorMessage>{errors.category?.message}</ErrorMessage>
          </Box>
        </Container>
        <Container>
          <Label htmlFor="title">Название</Label>
          <Box>
            <Input
              {...register("title", {
                required: { value: true, message: "Заполните поле" },
              })}
              $width="757px"
              $height="75px"
              id="title"
            />
            <ErrorMessage>{errors.title?.message}</ErrorMessage>
          </Box>
        </Container>
        <Container>
          <Label htmlFor="description">Описание</Label>
          <Box>
            <TextArea
              {...register("description", {
                required: { value: true, message: "Заполните поле" },
              })}
              id="description"
            />
            <ErrorMessage>{errors.description?.message}</ErrorMessage>
          </Box>
        </Container>
        <Container>
          <Label htmlFor="address">Адрес</Label>
          <Box>
            <Input
              {...register("address", {
                required: { value: true, message: "Заполните поле" },
              })}
              $width="757px"
              $height="75px"
              id="address"
            />
            <ErrorMessage>{errors.address?.message}</ErrorMessage>
          </Box>
        </Container>
        <Container>
          <Label htmlFor="logo">Логотип</Label>
          <Button {...register("logo")} as="input" type="file" id="logo" />
          {/* Добавить фото */}
        </Container>
        <BoxBtn>
          <Button type="submit">Отправить на обработку</Button>
        </BoxBtn>
      </Form>
    </Wrap>
  );
}
