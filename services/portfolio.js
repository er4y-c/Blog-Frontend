import { api } from "./api";

export const portfolio_services = {
    get_user_portfolio: async (username) => {
        const res = await api.get("/api/portfolios", {
            params: {
                username,
            }
        })
        return res.data;
    }
};