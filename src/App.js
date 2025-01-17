import "./App.css";
import Home from "./pages/Home/Home";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Routes, Route } from "react-router-dom";
import ProductsPage from "./pages/Products/Products";
import AuthPage from "./pages/Login/AuthPage";
import DashboardPage from "./pages/Dashboard/Dashboard";


function App() {
  return (
    <Routes>
      {/* Define Routes */}
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<AuthPage />} />
      <Route path="/login" element={<AuthPage />} />
      <Route path="/:gender" element={<ProductsPage />} />
      <Route path="/dashboard" element={<DashboardPage />} />
      {/* Catch-All Route */}
      {/* <Route path="*" element={<NotFoundPage />} /> */}
    </Routes>
  );
}

export default App;
