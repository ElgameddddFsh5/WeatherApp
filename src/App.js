import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Sidebar from "./Components/Header/Sidebar";
import Settings from "./Pages/Settings/Settings";
import Home from "./Pages/Home/Home";
import MapPage from "./Pages/Map/Map";

const App = () => {
  const [location, setlocation] = useState("");
  const [data, setData] = useState({});
  let loca = localStorage.getItem("location");
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${loca}&units=imperial&appid=a41e3e62aba293cfa55ec5c4b1fb0341`;
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((err) => console.error(err));
  }, [url]);

  localStorage.setItem("Celsius", true);
  localStorage.setItem("km", true);

  return (
    <>
      <Sidebar />
      <div className="mainInput container">
        <div className="text">
          <input
            className="input"
            type="text"
            placeholder="Search..."
            value={location}
            onChange={(event) => {
              localStorage.setItem("location", event.target.value);
              return setlocation(event.target.value);
            }}
          />
        </div>
      </div>
      <Routes>
        <Route path="/" element={<Home data={data} />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/map" element={<MapPage />} />
      </Routes>
    </>
  );
};

export default App;
