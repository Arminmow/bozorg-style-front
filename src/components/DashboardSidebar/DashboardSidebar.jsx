import React, { useContext } from "react";
import UserContext from "../../contexts/UserContext";
import { ListGroup, ListGroupItem } from "reactstrap";
import "./DashboardSidebar.css";

const DashboardSidebar = ({ setActiveComponent }) => {
  const handleOptionClick = (option) => {
    setActiveComponent(option);
  };
  const { user } = useContext(UserContext);
  console.log(user);

  return (
    <div className="sidebar bg-light p-3 rounded shadow-sm">
      {/* User Info Section */}
      <div className="user-info text-center mb-4">
        <h5 className="mb-1">{user && user.name}</h5>
        <p className="text-muted">{user && user.email}</p>
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
          onClick={() => handleOptionClick("cart")}
          className="d-flex align-items-center justify-content-end"
        >
          <span className="me-2">سبد خرید</span>
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
