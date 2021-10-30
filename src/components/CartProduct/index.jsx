import {
  CardContainer,
  Container,
  Image,
  MainContainer,
  QuantityBar,
} from "./style";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { FaTrash } from "react-icons/fa";
import { useCart } from "../../Providers/Cart";
import { useState } from "react";

function CartProduct({ product }) {
  const { id, name, img, price, subtotal } = product;
  const { deleteProductFromCart, updateProductSubtotal } = useCart();
  const [count, setCount] = useState(1);

  function updatePrice() {
    if (count > 1) {
      updateProductSubtotal(id, subtotal - price);
      setCount(count - 1);
    }
  }

  return (
    <CardContainer>
      <MainContainer>
        <Image>
          <img src={img} alt={name} />
        </Image>

        <Container>
          <h3>{name}</h3>
          <QuantityBar>
            <div>
              <AiOutlineMinus onClick={updatePrice} />
            </div>
            <div>{count}</div>
            <div>
              <AiOutlinePlus
                onClick={() => {
                  updateProductSubtotal(id, subtotal + price);
                  setCount(count + 1);
                }}
              />
            </div>
          </QuantityBar>
        </Container>
      </MainContainer>
      <FaTrash onClick={() => deleteProductFromCart(id)} />
    </CardContainer>
  );
}

export default CartProduct;
