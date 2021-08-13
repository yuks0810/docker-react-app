import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div class="ui menu">
      <Link to="/">
        <div class="header item">FakeShop</div>
      </Link>
      <a class="item">About Us</a>
      <a class="item">Jobs</a>
      <a class="item">Locations</a>
    </div>
  );
};

export default Header;
