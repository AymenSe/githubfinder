import React from "react";
import PropTypes from "prop-types";

function UserItem({ user }) {
  return (
    <div className="card text-center">
      <img
        src={user.avatar_url}
        alt="avatar img"
        className="round-img"
        style={{ width: "60px" }}
      />
      <h3>{user.login}</h3>
      <div>
        <a href={user.html_url} className="btn btn-dark btn-sm my-1">
          more
        </a>
      </div>
    </div>
  );
}

UserItem.prototype = {
  user: PropTypes.object.isRequired
};
export default UserItem;
