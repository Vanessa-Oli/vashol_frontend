import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./app.routes.jsx";
import TopPage from "../services/TopPage";

const Routes = () => {
    return (
        <BrowserRouter>
            <TopPage />
            <AppRoutes />
        </BrowserRouter>
    );
};

export default Routes;