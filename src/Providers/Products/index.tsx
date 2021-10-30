import { createContext, useState, useContext, useEffect } from "react";
import api from "../../services/api";
import { ChildrenProps } from "../../types/children";
import { ProductsProps } from "../../types/products";

interface ProductsContextProps {
  products: ProductsProps[];
  searchProducts: (name: string) => void;
}

export const ProductsContext = createContext<ProductsContextProps>(
  {} as ProductsContextProps
);

export const ProductsProvider = ({ children }: ChildrenProps) => {
  const [products, setProducts] = useState<ProductsProps[]>(
    [] as ProductsProps[]
  );

  function getProducts() {
    api
      .get("/products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err));
  }

  const searchProducts = (name: string) => {
    if (name === "") {
      getProducts();
    } else {
      setProducts(
        products.filter((item) => item.name.toLowerCase().includes(name))
      );
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <ProductsContext.Provider value={{ products, searchProducts }}>
      {children}
    </ProductsContext.Provider>
  );
};

export const useProducts = () => useContext(ProductsContext);
