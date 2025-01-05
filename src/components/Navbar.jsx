import React, { useState } from "react";
import './Navbar.css'; // Importing the CSS file

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
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleNavbar}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={`collapse navbar-collapse justify-content-center ${isNavbarCollapsed ? "" : "show"}`}
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
                      <a className="dropdown-item" href="#">
                        <b>Layers</b>
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">One</a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">Two</a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">Three</a>
                    </li>
                  </div>
                  <div className="dropdowns">
                    <li>
                      <a className="dropdown-item" href="#">
                        <b>By Shapes</b>
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">Square</a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">Circle</a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">Heart</a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">Tall</a>
                    </li>
                  </div>
                  <div className="dropdowns">
                    <li>
                      <a className="dropdown-item" href="#">
                        <b>By Flavour</b>
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">Chocolate</a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">Blueberry</a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">Pineapple</a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">Fresh Fruit</a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">Red Velvet</a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">Vanilla</a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">Butterscotch</a>
                    </li>
                  </div>
                  <div className="dropdowns">
                    <li>
                      <a className="dropdown-item" href="#">
                        <b>By Occasion</b>
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">Birthday</a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">Anniversary</a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">Wedding</a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">Baby Shower</a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">Engagement</a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">Mother's Day</a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">Father's Day</a>
                    </li>
                  </div>
                  <div className="dropdowns">
                    <li>
                      <a className="dropdown-item" href="#">
                        <b>By Festivals</b>
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">Valentine's Day</a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">Classic Cakes</a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">Friendship's Day</a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">New Year</a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">Christmas</a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">Teacher's Day</a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">Farewell Cakes</a>
                    </li>
                  </div>
                  <div className="dropdowns">
                    <li>
                      <a className="dropdown-item" href="#">
                        <b>Trending Cakes</b>
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">Pull Me Up Cake</a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">Pinata Cake</a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">Half Cake</a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">Bomb Cake</a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">Bento Cake</a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">Surprise Cake Box</a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">Photo Pulling Cake</a>
                    </li>
                  </div>
                  <div className="dropdowns">
                    <li>
                      <a className="dropdown-item" href="#">
                        <b>Unique Cakes</b>
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">Mousse Cake</a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">Bomb Cake</a>
                    </li>
                  </div>
                  <div className="dropdowns">
                    <li>
                      <a className="dropdown-item" href="#">
                        <b>Premium Cakes</b>
                      </a>
                    </li>
                  </div>
                </div>
              </ul>
            </li>
            <li className="nav-item mt-2 mx-3 mb-2">
              <a
                className="nav-link text-dark"
                href="/CakeList"
              >
                Cup-Cakes
              </a>
            </li>
            <li className="nav-item mt-2 mx-3 mb-2">
              <a
                className="nav-link text-dark"
                href="/CakeList"
              >
                Pastry
              </a>
            </li>
            <li className="nav-item mt-2 mx-3 mb-2">
              <a
                className="nav-link text-dark"
                href="/CakeList"
              >
                Desserts
              </a>
            </li>
            <li className="nav-item mt-2 mx-3 mb-2">
              <a
                className="nav-link text-dark"
                href="/CakeList"
              >
                Trending Cakes
              </a>
            </li>
            <li className="nav-item mt-2 mx-3 mb-2">
              <a
                className="nav-link text-dark"
                href="/CakeList"
              >
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
