import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Header = () => {
  return (
    <div className="ui fixed menu d-flex">
      <div className="ui container center">
        <Link to='/'>
          <h2>FakeShop</h2>
        </Link>
      </div>
      <div className="nav-login">
        <Link to='/login'>Login</Link>
      </div>
    </div>
  );
};

export default Header;
