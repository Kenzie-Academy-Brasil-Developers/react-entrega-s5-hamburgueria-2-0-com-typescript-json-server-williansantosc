import ProductsCard from "../../components/ProductsCard";
import { useProducts } from "../../Providers/Products";
import { CartIcon, HomeContainer, Input, ProductsContainer } from "./style";
import { Title } from "../../pages/Login/style";
import { FiSearch, FiLogOut } from "react-icons/fi";
import { IoCartSharp } from "react-icons/io5";
import { Icons, NavContainer } from "./style";
import Cart from "../../components/Cart";
import { useCart } from "../../Providers/Cart";
import { useState } from "react";

function Home() {
  const { products, searchProducts } = useProducts();
  const { cart } = useCart();
  const [show, setShow] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [showInput, setShowInput] = useState(true);

  function logout() {
    localStorage.clear();
    window.location.href = "/login";
  }

  return (
    <HomeContainer>
      <NavContainer>
        <Title style={{ cursor: "pointer" }} onClick={() => searchProducts("")}>
          <h1>Burguer</h1>
          <h3>Kenzie</h3>
        </Title>

        <Icons>
          {showInput && (
            <Input>
              <input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Procure um produto..."
                autoFocus
                onBlur={(evt) => {
                  if (evt.target.value === "") {
                    setShowInput(false);
                  }
                }}
              ></input>
              <button
                onClick={() => {
                  searchProducts(inputValue);
                  setInputValue("");
                }}
              >
                <FiSearch />
              </button>
            </Input>
          )}
          {!showInput && <FiSearch onClick={() => setShowInput(!show)} />}
          <CartIcon>
            <div>{cart.length}</div>
            <IoCartSharp onClick={() => setShow(true)} />
          </CartIcon>
          <FiLogOut onClick={logout} />
        </Icons>
      </NavContainer>
      <ProductsContainer>
        {products.map((product, index) => (
          <ProductsCard key={index} product={product} />
        ))}
      </ProductsContainer>
      {show && <Cart setShow={setShow} />}
    </HomeContainer>
  );
}

export default Home;
