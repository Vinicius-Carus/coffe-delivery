import { ThemeProvider } from "styled-components";
import { defaultThemes } from "./styles/themes/default";
import { GlobalStyle } from "./styles/global";
import CartProvider from "./contexts/CartContext";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";
import CheckoutProvider from "./contexts/CheckoutContext";

function App() {
  return (
    <>
      <ThemeProvider theme={defaultThemes}>
        <BrowserRouter>
          <CartProvider>
            <CheckoutProvider>
              <Router />
            </CheckoutProvider>
          </CartProvider>
        </BrowserRouter>

        <GlobalStyle />
      </ThemeProvider>
    </>
  );
}

export default App;
