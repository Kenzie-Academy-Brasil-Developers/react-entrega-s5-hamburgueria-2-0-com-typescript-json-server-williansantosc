import { Container } from "./style";

const Button = ({ children, graySchema = false, medium = false, ...rest }) => {
  return (
    <Container graySchema={graySchema} type="button" {...rest}>
      {children}
    </Container>
  );
};

export default Button;
