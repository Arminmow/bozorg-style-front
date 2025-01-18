import "./App.css";
import Home from "./pages/Home/Home";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Routes, Route } from "react-router-dom";
import ProductsPage from "./pages/Products/Products";
import AuthPage from "./pages/Login/AuthPage";
import DashboardPage from "./pages/Dashboard/Dashboard";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import { UserProvider } from "./contexts/UserContext";
import ProductDetailPage from "./pages/ProductDetil/ProductDetailPage";

function App() {
  return (
    <UserProvider>
      <Routes>
        {/* Define Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<AuthPage />} />
        <Route path="/login" element={<AuthPage />} />
        <Route path="/:gender" element={<ProductsPage />} />
        <Route path="/product" element={<ProductDetailPage />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <DashboardPage />
            </ProtectedRoute>
          }
        />
        {/* Catch-All Route */}
        {/* <Route path="*" element={<NotFoundPage />} /> */}
      </Routes>
    </UserProvider>
  );
}

export default App;
