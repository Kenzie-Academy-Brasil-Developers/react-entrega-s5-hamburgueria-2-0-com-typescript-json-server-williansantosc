import { useCart } from "../../Providers/Cart";
import CartProduct from "../CartProduct";
import { Bag, Container, Footer, Header, MainContainer } from "./style";
import { IoMdClose } from "react-icons/io";
import Button from "../Button";

function Cart({ setShow }) {
  const { cart, removeAllFromCart } = useCart();

  const totalPrice = cart.reduce((acc, product) => acc + product.subtotal, 0);

  function formatPrice(value) {
    return value.toLocaleString("pt-br", {
      style: "currency",
      currency: "BRL",
    });
  }

  return cart.length === 0 ? (
    <Container>
      <Header>
        <h3>Carrinho de compras</h3>
        <IoMdClose onClick={() => setShow(false)} />
      </Header>
      <Bag>
        <h3>Sua sacola está vazia</h3>
        <p>Adicione items</p>
      </Bag>
    </Container>
  ) : (
    <Container>
      <Header>
        <h3>Carrinho de compras</h3>
        <IoMdClose onClick={() => setShow(false)} />
      </Header>
      <MainContainer>
        {cart.map((product) => (
          <CartProduct key={product.id} product={product} />
        ))}

        <Footer>
          <div>
            <p>Total</p>
            <p>{formatPrice(totalPrice)}</p>
          </div>
          <Button graySchema onClick={removeAllFromCart}>
            Remover todos
          </Button>
        </Footer>
      </MainContainer>
    </Container>
  );
}

export default Cart;
