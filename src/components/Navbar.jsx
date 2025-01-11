import React, { useState } from "react";
import "./Navbar.css"; // Importing the CSS file

const Navbar = () => {
  const [isNavbarCollapsed, setNavbarCollapsed] = useState(true);
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleNavbar = () => {
    setNavbarCollapsed(!isNavbarCollapsed);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="navbar navbar-expand-lg  breadcrumb border-bottom border-top">
      <div className="container-fluid">
        <button className="navbar-toggler" type="button" onClick={toggleNavbar}>
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={`collapse navbar-collapse justify-content-center ${
            isNavbarCollapsed ? "" : "show"
          }`}
          id="navbarNavDropdown"
        >
          <ul className="navbar-nav">
            <li className="nav-item dropdown mx-3">
              <a
                className="nav-link text-dark dropdown-toggle mb-2 mt-2"
                href="/CakeList"
                id="dropdownMenuButton1"
                onClick={toggleDropdown}
              >
                Cakes
              </a>
              <ul
                className={`dropdown-menu ${isDropdownOpen ? "show" : ""}`}
                aria-labelledby="dropdownMenuButton1"
              >
                <div className="d-flex flex-wrap">
                  <div className="dropdowns">
                    <li>
                      <a className="dropdown-item" href="/cakelist">
                        <b>Layers</b>
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/cakelist">
                        One
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/cakelist">
                        Two
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/cakelist">
                        Three
                      </a>
                    </li>
                  </div>
                  <div className="dropdowns">
                    <li>
                      <a className="dropdown-item" href="/cakelist">
                        <b>By Shapes</b>
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/cakelist">
                        Square
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/cakelist">
                        Circle
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/cakelist">
                        Heart
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/cakelist">
                        Tall
                      </a>
                    </li>
                  </div>
                  <div className="dropdowns">
                    <li>
                      <a className="dropdown-item" href="/cakelist">
                        <b>By Flavour</b>
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/cakelist">
                        Chocolate
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/cakelist">
                        Blueberry
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/cakelist">
                        Pineapple
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/cakelist">
                        Fresh Fruit
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/cakelist">
                        Red Velvet
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/cakelist">
                        Vanilla
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/cakelist">
                        Butterscotch
                      </a>
                    </li>
                  </div>
                  <div className="dropdowns">
                    <li>
                      <a className="dropdown-item" href="/cakelist">
                        <b>By Occasion</b>
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/cakelist">
                        Birthday
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/cakelist">
                        Anniversary
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/cakelist">
                        Wedding
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/cakelist">
                        Baby Shower
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/cakelist">
                        Engagement
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/cakelist">
                        Mother's Day
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/cakelist">
                        Father's Day
                      </a>
                    </li>
                  </div>
                  <div className="dropdowns">
                    <li>
                      <a className="dropdown-item" href="/cakelist">
                        <b>By Festivals</b>
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/cakelist">
                        Valentine's Day
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/cakelist">
                        Classic Cakes
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/cakelist">
                        Friendship's Day
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/cakelist">
                        New Year
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/cakelist">
                        Christmas
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/cakelist">
                        Teacher's Day
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/cakelist">
                        Farewell Cakes
                      </a>
                    </li>
                  </div>
                  <div className="dropdowns">
                    <li>
                      <a className="dropdown-item" href="/cakelist">
                        <b>Trending Cakes</b>
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/cakelist">
                        Pull Me Up Cake
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/cakelist">
                        Pinata Cake
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/cakelist">
                        Half Cake
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/cakelist">
                        Bomb Cake
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/cakelist">
                        Bento Cake
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/cakelist">
                        Surprise Cake Box
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/cakelist">
                        Photo Pulling Cake
                      </a>
                    </li>
                  </div>
                  <div className="dropdowns">
                    <li>
                      <a className="dropdown-item" href="/cakelist">
                        <b>Unique Cakes</b>
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/cakelist">
                        Mousse Cake
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/cakelist">
                        Bomb Cake
                      </a>
                    </li>
                  </div>
                  <div className="dropdowns">
                    <li>
                      <a className="dropdown-item" href="/cakelist">
                        <b>Premium Cakes</b>
                      </a>
                    </li>
                  </div>
                </div>
              </ul>
            </li>
            <li className="nav-item mt-2 mx-3 mb-2">
              <a className="nav-link text-dark" href="/cakelist">
                Cup-Cakes
              </a>
            </li>
            <li className="nav-item mt-2 mx-3 mb-2">
              <a className="nav-link text-dark" href="/cakelist">
                Pastry
              </a>
            </li>
            <li className="nav-item mt-2 mx-3 mb-2">
              <a className="nav-link text-dark" href="/cakelist">
                Desserts
              </a>
            </li>
            <li className="nav-item mt-2 mx-3 mb-2">
              <a className="nav-link text-dark" href="/cakelist">
                Trending Cakes
              </a>
            </li>
            <li className="nav-item mt-2 mx-3 mb-2">
              <a className="nav-link text-dark" href="/cakelist">
                Unique Cakes
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
