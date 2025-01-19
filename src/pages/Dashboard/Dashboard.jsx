import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";
import DashboardSidebar from "../../components/DashboardSidebar/DashboardSidebar";
import UserInfoComponent from "../../components/UserInfoComponent/UserInfoComponent";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import CartDisplay from "../../components/CartDisplay/CartDisplay";

const DashboardPage = () => {
  // State to manage selected option
  const [activeComponent, setActiveComponent] = useState("userInfo");
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

  // Function to render the corresponding component
  const renderContent = () => {
    switch (activeComponent) {
      case "userInfo":
        return <UserInfoComponent />;
      case "cart":
        return <CartDisplay cartItems={cartItems} onRemove={handleRemove} />;
      // Add more cases for other components when implemented
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
            <DashboardSidebar setActiveComponent={setActiveComponent} />
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default DashboardPage;
