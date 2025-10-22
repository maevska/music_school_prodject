import { BrowserRouter } from "react-router-dom";

export const RouterProviders = ({ children }) => {
    return <BrowserRouter>{children}</BrowserRouter>
};