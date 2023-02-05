import React from "react";
import Styles from "./Home.module.css";

const Home = ({ data }) => {
  return (
    <>
      <main className={`${Styles.Main} homeSec container `}>
        <section className="text">
          <div className={`${Styles.cont}`}>
            <div className={`${Styles.top}`}>
              <div className={`${Styles.location}`}>
                <p>{data.name}</p>
              </div>
              <div className={`${Styles.temp}`}>
                <h1>
                  {localStorage.getItem("Celsius") ? (
                    <>
                      {((data.main?.temp - 32) * (5 / 9)).toFixed(0)} <p>°C</p>
                    </>
                  ) : (
                    <>
                      {(data.main?.temp).toFixed(0)}
                      <p>°F</p>
                    </>
                  )}
                </h1>
              </div>
              <div className={`${Styles.description}`}>
                <p>{data.weather ? data.weather[0].main : null}</p>
              </div>
            </div>

            <div className={`${Styles.bottom}`}>
              <div className={`${Styles.feels}`}>
                <p>
                  {localStorage.getItem("Celsius") ? (
                    <>
                      {((data.main?.feels_like - 32) * (5 / 9)).toFixed(0)}
                      °C
                    </>
                  ) : (
                    <>
                      {(data.main?.feels_like).toFixed(0)}
                      °F
                    </>
                  )}
                </p>
                <p>Feels Like</p>
              </div>
              <div className={`${Styles.humidity}`}>
                <p>{data.main?.humidity}</p>
                <p>Humidity</p>
              </div>
              <div className={`${Styles.wind}`}>
                <p>
                  {localStorage.getItem("km") ? (
                    <>{(data.wind?.speed * 1.60934).toFixed(2)} Km/h</>
                  ) : (
                    <>{data.wind?.speed} MPH</>
                  )}
                </p>
                <p>Wind Speed</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
