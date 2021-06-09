import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";

import CartProvider from "./store/CartProvider";

function App() {
  return (
    <CartProvider>
      <Header />
      <Cart />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
