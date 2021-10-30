import { ProductsProps } from "../../types/products";
import { Image, ProductCard, ProductData } from "./style";
import Button from "../Button";
import { useCart } from "../../Providers/Cart";
import { useHistory } from "react-router";

interface ProductsCardProps {
  product: ProductsProps;
}

function ProductsCard({ product }: ProductsCardProps) {
  const { img, category, name, price } = product;
  const { addProductToCart } = useCart();
  const history = useHistory();

  function formatPrice(value: number) {
    return value.toLocaleString("pt-br", {
      style: "currency",
      currency: "BRL",
    });
  }

  return (
    <ProductCard>
      <Image>
        <img src={img} alt={name} />
      </Image>
      <ProductData>
        <h3>{name}</h3>
        <p>{category}</p>
        <span>{formatPrice(price)}</span>
        <Button onClick={() => addProductToCart(product, history)}>
          Adicionar
        </Button>
      </ProductData>
    </ProductCard>
  );
}

export default ProductsCard;
