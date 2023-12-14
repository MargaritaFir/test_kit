import React, { memo } from "react";
import "./index.scss";

const Header = () => {
  return (
    <div className="header">
      <div className="header_logo">cat</div>
      <div className="header_text">
        <span className="header_text-item">currencies</span>
        <span className="header_text-item">academic</span>
        <span className="header_text-item">terms</span>
      </div>
    </div>
  );
};

export default memo(Header);
