import React from "react";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <a className="navbar-brand">
        Google Books Search
      </a>
      <a className="navbar-brand" href="/">
          Search
      </a>
      <a className="navbar-brand" href="/saved">
          Saved
      </a>
    </nav>
  );
}

//add href="/" to <a> for links

export default Nav;