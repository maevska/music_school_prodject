import { useRoutes } from "react-router-dom";
import { routesConfig } from "./config";

export const AppRouter = () => {
    const element = useRoutes(routesConfig);
    return element;
};