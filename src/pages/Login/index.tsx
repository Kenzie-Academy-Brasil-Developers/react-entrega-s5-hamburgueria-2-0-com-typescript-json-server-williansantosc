import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { TextField, InputAdornment, IconButton } from "@material-ui/core";
import VisibilityIcon from "@material-ui/icons/Visibility";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";
import Button from "../../components/Button";
import { useState } from "react";
import { FiShoppingBag } from "react-icons/fi";
import {
  CardContainer,
  Container,
  Header,
  LogoContainer,
  MainContainer,
  Title,
} from "./style";
import { useHistory } from "react-router";
import { useAuth } from "../../Providers/Authorization";

interface DataProps {
  email: string;
  password: string;
}

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const { login } = useAuth();
  const history = useHistory();

  const formSchema = yup.object().shape({
    email: yup.string().required("E-mail obrigatório").email("Email inválido"),

    password: yup
      .string()
      .required("Senha obrigatória")
      .min(6, "A senha deve ter pelo menos 6 caracteres"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  function onSubmit(data: DataProps) {
    login(data, history);
  }

  return (
    <MainContainer>
      <LogoContainer id="logo">
        <Title>
          <h1>Burguer</h1>
          <h3>Kenzie</h3>
        </Title>

        <CardContainer>
          <div>
            <FiShoppingBag />
          </div>
          <div>
            A vida é como um sanduíche, é preciso recheá-la com os{" "}
            <strong>melhores</strong> ingredientes.
          </div>
        </CardContainer>
      </LogoContainer>

      <Container>
        <Header>
          <h1>Login</h1>
        </Header>
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextField
            label="E-mail"
            fullWidth
            focused
            placeholder="Digite seu email"
            margin="none"
            variant="outlined"
            error={!!errors.email}
            helperText={errors.email?.message}
            {...register("email")}
          />

          <TextField
            type={showPassword ? "text" : "password"}
            label="Senha"
            placeholder="Digite sua senha"
            margin="none"
            focused
            fullWidth
            variant="outlined"
            error={!!errors.password}
            helperText={errors.password?.message}
            {...register("password")}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={() => setShowPassword(!showPassword)}>
                    {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <Button type="submit">Login</Button>

          <p>Crie sua conta para saborear muitas delícias e matar sua fome!</p>
          <Button onClick={() => history.push("/register")} graySchema>
            Cadastrar
          </Button>
        </form>
      </Container>
    </MainContainer>
  );
}

export default Login;
