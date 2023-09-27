import { Routes, Route } from "react-router-dom";
import { useAuth } from "../hooks/auth";
import Login from "../pages/Login";

const AppRoutes = () => {
    const { user } = useAuth();

    return (
        <Routes>
            <Route path="/login" element={user ? <Home /> : <Login />} />
        </Routes>
    );
};

export default AppRoutes;