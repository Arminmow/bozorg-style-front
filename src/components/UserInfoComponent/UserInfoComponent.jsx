import React, { useContext } from "react";
import UserContext from "../../contexts/UserContext";
import ShowForAdmin from "../../modules/ShowForAdmin/ShowForAdmin";

const UserInfoComponent = () => {
  const { user } = useContext(UserContext);
  return (
    <div className="user-info-content p-4 bg-white rounded shadow-sm">
      <h3>اطلاعات کاربر</h3>
      {user ? (
          <p>Welcome, {user.name}</p> // Display user name if logged in
        ) : (
          <p>Not logged in</p>
        )}
        <ShowForAdmin user={user}>
          <h1>HAHA</h1>
        </ShowForAdmin>
    </div>
  );
};

export default UserInfoComponent;
