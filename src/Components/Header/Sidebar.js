import React from "react";
import { Link } from "react-router-dom";
import { TiWeatherCloudy } from "react-icons/ti";
import { FiMap } from "react-icons/fi";
import { AiOutlineSetting } from "react-icons/ai";
import "./Sidebar.css";
import logo from "../../images/03192019-04.png";

const Sidebar = () => {
  const body = document.querySelector("body");

  const SideBarHandleToggle = () => {
    const sidebar = document.querySelector("nav");
    sidebar.classList.toggle("close");
  };

  const HandleDarkMode = () => {
    const modeText = document.querySelector(".mode-text");

    body.classList.toggle("dark");

    if (body.classList.contains("dark")) {
      modeText.innerText = "Light mode";
    } else {
      modeText.innerText = "Dark mode";
    }
  };

  //  const searchLocation = (event) => {
  //    if (event.key === "Enter") {
  //      fetch(url)
  //        .then((response) => response.json())
  //        .then((data) => setData(data))
  //        .catch((err) => console.error(err));
  //    }
  //  };

  return (
    <>
      <nav className="sidebar close">
        <header>
          <div className="image-text">
            <span className="image">
              <img src={logo} alt="" />
            </span>

            <div className="text logo-text">
              <span className="name">SkyView</span>
            </div>
          </div>

          <i
            className="bx bx-chevron-right toggle"
            onClick={SideBarHandleToggle}
          ></i>
        </header>

        <div className="menu-bar">
          <div className="menu">
            {/* <li className="search-box" onClick={HandleSearchBar}>
              <i className="bx bx-search icon"></i>
              <input
                type="text"
                placeholder="Search..."
                value={location}
                onChange={(event) => {
                  localStorage.setItem("location", event.target.value);
                  return setlocation(event.target.value);
                }}
                // onKeyPress={searchLocation}
              />
            </li> */}

            <ul className="menu-links">
              <li className="nav-link">
                <Link to="/">
                  <TiWeatherCloudy className="icons" size={30} />
                  <span className="text nav-text">Weather</span>
                </Link>
              </li>
              <li className="nav-link">
                <Link to="/map">
                  <FiMap className="icons" size={25} />
                  <span className="text nav-text">Map</span>
                </Link>
              </li>
              <li className="nav-link">
                <Link to="/settings">
                  <AiOutlineSetting className="icons" size={25} />
                  <span className="text nav-text">Settings</span>
                </Link>
              </li>
            </ul>
          </div>

          <div className="bottom-content">
            <li className="mode">
              <div className="sun-moon">
                <i className="bx bx-moon icon moon"></i>
                <i className="bx bx-sun icon sun"></i>
              </div>
              <span className="mode-text text">Dark mode</span>

              <div className="toggle-switch" onClick={HandleDarkMode}>
                <span className="switch"></span>
              </div>
            </li>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Sidebar;
