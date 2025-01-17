import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";
import DashboardSidebar from "../../components/DashboardSidebar/DashboardSidebar";
import UserInfoComponent from "../../components/UserInfoComponent/UserInfoComponent";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

const DashboardPage = () => {
  // State to manage selected option
  const [activeComponent, setActiveComponent] = useState("userInfo");

  // Function to render the corresponding component
  const renderContent = () => {
    switch (activeComponent) {
      case "userInfo":
        return <UserInfoComponent />;
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
      <Footer/>
    </>
  );
};

export default DashboardPage;
