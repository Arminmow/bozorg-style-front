import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";
import { useLocation } from "react-router-dom";
import DashboardSidebar from "../../components/DashboardSidebar/DashboardSidebar";
import UserInfoComponent from "../../components/UserInfoComponent/UserInfoComponent";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import CartDisplay from "../../components/CartDisplay/CartDisplay";

const DashboardPage = () => {
  // State to manage cart items
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Sample Product 1",
      price: 50,
      quantity: 2,
      image: "https://via.placeholder.com/200",
    },
    {
      id: 2,
      name: "Sample Product 2",
      price: 100,
      quantity: 1,
      image: "https://via.placeholder.com/200",
    },
  ]);

  const handleRemove = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  // Get the current URL path
  const location = useLocation();
  const activeComponent = location.pathname.split("/").pop(); // Extract the last segment of the path
  
  const renderContent = () => {
    switch (activeComponent) {
      case "user-info":
        return <UserInfoComponent />;
      case "cart":
        return <CartDisplay cartItems={cartItems} onRemove={handleRemove} />;
      default:
        return <UserInfoComponent />;
    }
  };

  return (
    <>
      <Navbar />
      <Container fluid className="dashboard-page mt-4">
        <Row>
          <Col md="9" className="p-4">
            {renderContent()}
          </Col>
          <Col md="3">
            <DashboardSidebar />
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default DashboardPage;
