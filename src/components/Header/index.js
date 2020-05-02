import React from "react";
import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Header() {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="navbar-brand">
        Employee Directory
      </div>
    </nav>
  );
}

export default Header;
