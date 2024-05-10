import React from "react";
import MenuPage from "./pages/menu/MenuPage";
import "tailwindcss/tailwind.css";
import { CartProvider } from "./provider/CartContext";
import { CtVis, CtVisProvider } from "./provider/CartVisibility";
const App = () => {
  return (
    <div>
      <CartProvider>
        <CtVisProvider>
          <MenuPage />
        </CtVisProvider>
      </CartProvider>
    </div>
  );
};

export default App;
