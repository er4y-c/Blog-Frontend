import { createContext, useState, useEffect, } from 'react';
import { portfolio_services } from '../services/portfolio';

export const PortfolioContext = createContext();

export const PortfolioContextProvider = ({ children }) => {
    const [userPort, setUserPort] = useState({});
    const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(true);
  const fetchPortfolio = async (username) => {
    await portfolio_services.get_user_portfolio(username)
        .then((res) => {
            setUserPort(res);
            setLoading(false);
        });
  };
  useEffect(()=>{
    fetchPortfolio(username);
  }, [username])
  const context = {
    userPort,
    setUserPort,
    loading,
    setLoading,
    fetchPortfolio,
    username,
    setUsername,
  };
  return <PortfolioContext.Provider value={context}>{ children }</PortfolioContext.Provider>
};