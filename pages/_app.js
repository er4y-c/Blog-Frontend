import React from "react";
import "../styles/global.css";
import { PortfolioContextProvider } from "../context/portfolio";
import { AuthProvider } from "../context/auth";
export default function App({ Component, pageProps }) {
  return(
    <AuthProvider>
      <PortfolioContextProvider>
        <Component {...pageProps} />
      </PortfolioContextProvider>
    </AuthProvider>
  );
};