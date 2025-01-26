import "./App.css";
import Home from "./pages/Home/Home";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Routes, Route } from "react-router-dom";
import ProductsPage from "./pages/Products/Products";
import AuthPage from "./pages/Login/AuthPage";
import DashboardPage from "./pages/Dashboard/Dashboard";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import ProductDetailPage from "./pages/ProductDetil/ProductDetailPage";
import Providers from "./providers/Providers";
import AddProductPage from "./pages/AddProductPage/AddProductPage";
import UserInfoComponent from "./components/UserInfoComponent/UserInfoComponent";
import CartDisplay from "./components/CartDisplay/CartDisplay";

function App() {
  return (
    <Providers>
      <Routes>
        {/* Define Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<AuthPage />} />
        <Route path="/login" element={<AuthPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/product/:id" element={<ProductDetailPage />} />
        <Route path="/product/add" element={<AddProductPage />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <DashboardPage />
            </ProtectedRoute>
          }
        >
          <Route path="user-info" element={<UserInfoComponent />} />
          <Route path="cart" element={<CartDisplay />} />
        </Route>
        {/* Catch-All Route */}
        {/* <Route path="*" element={<NotFoundPage />} /> */}
      </Routes>
    </Providers>
  );
}

export default App;
