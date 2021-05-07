import React from "react";
import { Follow } from "react-twitter-widgets";

function UserInfo({ config, expanded }) {
  const { userTwitter } = config;

  return (
    <div className="d-inline-block align-middle mr-3">
      <Follow
        username={userTwitter}
        options={{ count: expanded ? true : "none" }}
      />
    </div>
  );
}

export default UserInfo;
