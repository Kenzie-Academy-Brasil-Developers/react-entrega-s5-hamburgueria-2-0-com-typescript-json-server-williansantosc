import { History } from "history";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import toast from "react-hot-toast";
import api from "../../services/api";
import { ChildrenProps } from "../../types/children";
import { ProductsProps } from "../../types/products";
import { useAuth } from "../Authorization";
import { CartProps } from "../../types/cart";

interface CartContextProps {
  addProductToCart: (product: ProductsProps, history: History) => void;
  getProductsInCart: () => void;
  deleteProductFromCart: (id: number) => void;
  updateProductSubtotal: (id: number, update: number) => void;
  removeAllFromCart: () => void;
  cart: CartProps[];
}

export const CartContext = createContext<CartContextProps>(
  {} as CartContextProps
);

export const CartProvider = ({ children }: ChildrenProps) => {
  const { token, id } = useAuth();
  const [cart, setCart] = useState<CartProps[]>([] as CartProps[]);

  function addProductToCart(product: ProductsProps, history: History) {
    const data = { ...product, userId: id, subtotal: product.price };
    if (cart.every((str) => str.name !== product.name)) {
      api
        .post("/cart", data, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then(() => {
          toast.success("Produto adicionado ao carrinho!");
        })
        .catch((_) => {
          history.push("/login");
          toast.error("É preciso estar logado para poder comprar");
        });
    } else {
      toast.error("O produto selecionado já existe em seu carrinho!");
    }
  }

  const getProductsInCart = useCallback(() => {
    api
      .get("cart", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setCart(res.data);
      })
      .catch((err) => console.log(err));
  }, [token]);

  function deleteProductFromCart(id: number) {
    api
      .delete(`/cart/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((_) => toast.success("Produto removido!"))
      .catch((err) => console.log(err));
  }

  function updateProductSubtotal(id: number, update: number) {
    const newSubtotal = { subtotal: update };
    api
      .patch(`/cart/${id}`, newSubtotal, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }

  function removeAllFromCart() {
    cart.map(async (product) => {
      await api
        .delete(`/cart/${product.id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then(() => {
          toast.success("Todos os produtos foram removidos!");
        });
    });
  }

  useEffect(() => {
    getProductsInCart();
  }, [cart, getProductsInCart]);

  return (
    <CartContext.Provider
      value={{
        addProductToCart,
        getProductsInCart,
        deleteProductFromCart,
        updateProductSubtotal,
        removeAllFromCart,
        cart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
