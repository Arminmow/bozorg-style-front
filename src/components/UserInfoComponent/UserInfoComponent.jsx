import React, { useContext } from "react";
import UserContext from "../../contexts/UserContext";
import ShowForAdmin from "../../modules/ShowForAdmin/ShowForAdmin";
import {
  ShowForLoggedIn,
  LoggedIn,
  NotLoggedIn,
} from "../../modules/ShowForLoggedIn/ShowForLoggedIn";

const UserInfoComponent = () => {
  const { user } = useContext(UserContext);
  return (
    <div className="user-info-content p-4 bg-white rounded shadow-sm">
      <h3>اطلاعات کاربر</h3>
      
      <ShowForLoggedIn user={user}>
        <LoggedIn>
          <p>Welcome, {user?.name}</p>
        </LoggedIn>
        <NotLoggedIn>
          <p>Not logged in</p>
        </NotLoggedIn>
      </ShowForLoggedIn>

      <ShowForAdmin user={user}>
        <h1> You're admin</h1>
      </ShowForAdmin>

    </div>
  );
};

export default UserInfoComponent;
