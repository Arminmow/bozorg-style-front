import React from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
import "./DashboardSidebar.css";

const DashboardSidebar = ({ setActiveComponent }) => {
  const handleOptionClick = (option) => {
    setActiveComponent(option);
  };

  return (
    <div className="sidebar bg-light p-3 rounded shadow-sm">
      {/* User Info Section */}
      <div className="user-info text-center mb-4">
        <img
          src="https://via.placeholder.com/100"
          alt="کاربر"
          className="rounded-circle mb-2"
        />
        <h5 className="mb-1">علی رضایی</h5>
        <p className="text-muted">ali.rezaei@example.com</p>
      </div>

      {/* Navigation Options */}
      <ListGroup flush>
        <ListGroupItem
          tag="button"
          action
          onClick={() => handleOptionClick("userInfo")}
          className="d-flex align-items-center justify-content-end"
        >
          <span className="me-2">اطلاعات کاربر</span>
          <i className="bi bi-person"></i>
        </ListGroupItem>
        <ListGroupItem
          tag="button"
          action
          onClick={() => handleOptionClick("favorites")}
          className="d-flex align-items-center justify-content-end"
        >
          <span className="me-2">علاقه‌مندی‌ها</span>
          <i className="bi bi-heart"></i>
        </ListGroupItem>
        <ListGroupItem
          tag="button"
          action
          onClick={() => handleOptionClick("logout")}
          className="d-flex align-items-center justify-content-end text-danger"
        >
          <span className="me-2">خروج</span>
          <i className="bi bi-box-arrow-right"></i>
        </ListGroupItem>
      </ListGroup>
    </div>
  );
};

export default DashboardSidebar;
