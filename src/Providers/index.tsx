import { ChildrenProps } from "../types/children";
import { AuthProvider } from "./Authorization";
import { ProductsProvider } from "./Products";
import { CartProvider } from "./Cart";

function Providers({ children }: ChildrenProps) {
  return (
    <AuthProvider>
      <ProductsProvider>
        <CartProvider>{children}</CartProvider>
      </ProductsProvider>
    </AuthProvider>
  );
}

export default Providers;
