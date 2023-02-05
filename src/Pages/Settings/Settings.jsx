import React, { useEffect } from "react";
import "./Settings.css";
const Settings = () => {
  const CelisusHandleClick = () => {
    if (document.querySelector(".Fahrenheit").classList.contains("active")) {
      document.querySelector(".Fahrenheit").classList.remove("active");
      document.querySelector(".Celsius").classList.add("active");
      if (localStorage.getItem("Fahrenheit", true)) {
        localStorage.removeItem("Fahrenheit");
        localStorage.setItem("Celsius", true);
      }
    }
  };

  const FahrenheitHandleClick = () => {
    if (document.querySelector(".Celsius").classList.contains("active")) {
      document.querySelector(".Celsius").classList.remove("active");
      document.querySelector(".Fahrenheit").classList.add("active");
      if (localStorage.getItem("Celsius", true)) {
        localStorage.removeItem("Celsius");
        localStorage.setItem("Fahrenheit", true);
      }
    }
  };
  const KmHandleClick = () => {
    if (document.querySelector(".mile").classList.contains("active")) {
      document.querySelector(".mile").classList.remove("active");
      document.querySelector(".km").classList.add("active");
      if (localStorage.getItem("mile", true)) {
        localStorage.removeItem("mile");
        localStorage.setItem("km", true);
      }
    }
  };

  const MileHandleClick = () => {
    if (document.querySelector(".km").classList.contains("active")) {
      document.querySelector(".km").classList.remove("active");
      document.querySelector(".mile").classList.add("active");
      if (localStorage.getItem("km", true)) {
        localStorage.removeItem("km");
        localStorage.setItem("mile", true);
      }
    }
  };
  useEffect(() => {
    if (localStorage.getItem("Celsius")) {
      document.querySelector(".Celsius").classList.add("active");
    } else {
      document.querySelector(".Fahrenheit").classList.add("active");
    }

    if (localStorage.getItem("km")) {
      document.querySelector(".km").classList.add("active");
    } else {
      document.querySelector(".mile").classList.add("active");
    }
  }, []);

  return (
    <>
      <div className="settings container">
        <div className="text">
          <h1 className="mt-4">Units</h1>
        </div>
        <div className="text unitscontent rounded-5 py-xl-5 mt-xl-4 pxl-5">
          <div className="d-flex flex-column  units">
            <label htmlFor="temperature-unit">Temperature</label>
            <div className="d-flex justify-content-between tempContent">
              <div className="Celsius" onClick={() => CelisusHandleClick()}>
                <h4>Celsius</h4>
              </div>
              <div
                className="Fahrenheit "
                onClick={() => FahrenheitHandleClick()}
              >
                <h4>Fahrenheit</h4>
              </div>
            </div>
            <div className=" mt-5">
              <label htmlFor="wind-speed-unit">Wind Speed</label>
              <div className="d-flex justify-content-between WindSpeed">
                <div className="km " onClick={() => KmHandleClick()}>
                  <h4>km/h</h4>
                </div>
                <div className="mile " onClick={() => MileHandleClick()}>
                  <h4>MPH</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Settings;
