import React from "react";
// functional components (you can also use class component)

const Header = () => {
  return (
    <div class="ui menu">
      <div class="header item">Our Company</div>
      <a class="item">About Us</a>
      <a class="item">Jobs</a>
      <a class="item">Locations</a>
    </div>
  );
};

export default Header;
