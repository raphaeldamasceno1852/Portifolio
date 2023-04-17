import React from "react";
import ReactDOM from "react-dom/client";
import { Footer } from "./components/Footer";
import { NavBar } from "./components/Navbar";
import { Home } from "./pages/home";
import { GlobalStyle } from "./styles/Global";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <GlobalStyle>
      <NavBar />
      <Home />
      <Footer />
    </GlobalStyle>
  </React.StrictMode>
);
