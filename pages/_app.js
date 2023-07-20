import React from "react";
import "../styles/global.css";
import { PortfolioContextProvider } from "../context/portfolio";

export default function App({ Component, pageProps }) {
    return(
        <PortfolioContextProvider>
            <Component {...pageProps} />
        </PortfolioContextProvider>
    );
};