import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { TextField, InputAdornment, IconButton } from "@material-ui/core";
import VisibilityIcon from "@material-ui/icons/Visibility";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";
import Button from "../../components/Button";
import { useState } from "react";
import {
  CardContainer,
  Container,
  Header,
  LogoContainer,
  MainContainer,
  Title,
} from "./style";
import { Link } from "react-router-dom";
import { FiShoppingBag } from "react-icons/fi";
import { useAuth } from "../../Providers/Authorization";
import { useHistory } from "react-router";

interface DataProps {
  email: string;
  password: string;
}

function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState(false);

  const history = useHistory();

  const { signUp } = useAuth();

  const formSchema = yup.object().shape({
    username: yup.string().required("Nome obrigatório"),

    email: yup.string().required("E-mail obrigatório").email("Email inválido"),

    password: yup
      .string()
      .required("Senha obrigatória")
      .min(6, "A senha deve ter pelo menos 6 caracteres"),

    confirmPassword: yup
      .string()
      .required("Confirmação da senha obrigatória")
      .oneOf([yup.ref("password"), null], "As senhas devem ser idênticas"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  function onSubmit({ email, password }: DataProps) {
    const data = { email, password };
    signUp(data, history);
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
          <h1>Cadastro</h1>
          <Link to="/login">Retornar para o login</Link>
        </Header>
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextField
            margin="none"
            label="Nome"
            fullWidth
            focused
            variant="outlined"
            placeholder="Digite seu nome"
            error={!!errors.username}
            helperText={errors.username?.message}
            {...register("username")}
          />

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

          <TextField
            type={confirmPassword ? "text" : "password"}
            label="Confirme a sua senha"
            placeholder="Confirme a sua senha"
            fullWidth
            focused
            variant="outlined"
            margin="none"
            error={!!errors.confirmPassword}
            helperText={errors.confirmPassword?.message}
            {...register("confirmPassword")}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={() => setConfirmPassword(!confirmPassword)}
                  >
                    {confirmPassword ? (
                      <VisibilityIcon />
                    ) : (
                      <VisibilityOffIcon />
                    )}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <Button graySchema type="submit">
            Cadastrar
          </Button>
        </form>
      </Container>
    </MainContainer>
  );
}

export default Register;
