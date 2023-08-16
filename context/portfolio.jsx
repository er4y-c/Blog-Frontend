import { createContext, useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { portfolio_services } from '../services/portfolio';

export const PortfolioContext = createContext();

export const PortfolioContextProvider = ({ children }) => {
  const router = useRouter();
  const initialUser = { ...router.query };
  const [userPort, setUserPort] = useState({});
  const [username, setUsername] = useState(initialUser);
  const [loading, setLoading] = useState(true);

  const fetchPortfolio = async (username) => {
    if(username) {
    await portfolio_services.get_user_portfolio(username)
      .then((res) => {
        setUserPort(res);
        setLoading(false);
    });
    }
    
  };

  useEffect(()=>{
    fetchPortfolio(initialUser?.username);
  }, [initialUser?.username]);

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