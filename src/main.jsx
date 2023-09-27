import React from "react";
import ReactDOM from "react-dom";
import { AuthProvider } from "./hooks/auth"; // Importe seu contexto de autenticação (caso você esteja usando um)
import Routes from "./routes"; // Importe o componente Routes que você configurou

ReactDOM.render(
    <React.StrictMode>
        <AuthProvider> {/* Se você está usando um contexto de autenticação, envolva suas rotas com ele */}
            <Routes />
        </AuthProvider>
    </React.StrictMode>,
    document.getElementById("root")
);
