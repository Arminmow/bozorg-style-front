import React from "react";

const ADMIN_ROLE_ID = 1; 

const ShowForAdmin = ({ user, children }) => {
    return user?.role_id === ADMIN_ROLE_ID ? children : null;
};

export default ShowForAdmin;
