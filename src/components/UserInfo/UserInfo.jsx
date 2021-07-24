import React from "react";
import { Follow } from "react-twitter-widgets";

function UserInfo({ config, expanded }) {
  const { userTwitter } = config;

  const style = {
    position: "relative",
    top: "4px"
  }

  return (
    <div className="d-inline-block align-middle" style={style}>
      <Follow
        username={userTwitter}
        options={{ count: expanded ? true : "none" }}
      />
    </div>
  );
}

export default UserInfo;
