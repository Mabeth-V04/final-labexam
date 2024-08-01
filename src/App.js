import React, { useState } from 'react';

const api = {
  key: "9052c906b9f703323bd01972b5de690f",
  base: "https://api.openweathermap.org/data/2.5/",
};

const styles = {
  body: {
    margin: 0,
    fontFamily: 'Arial, sans-serif',
    background: 'linear-gradient(to right, #4facfe, #00f2fe)',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  app: {
    textAlign: 'center',
    background: 'rgba(255, 255, 255, 0.1)',
    padding: '20px',
    borderRadius: '15px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  },
  header: {
    marginBottom: '20px',
  },
  h1: {
    color: '#fff',
  },
  input: {
    padding: '10px',
    border: 'none',
    borderRadius: '5px',
    marginRight: '10px',
    width: '200px',
  },
  button: {
    padding: '10px 15px',
    border: 'none',
    borderRadius: '5px',
    background: '#00f2fe',
    color: '#fff',
    cursor: 'pointer',
    transition: 'background 0.3s ease',
  },
  buttonHover: {
    background: '#4facfe',
  },
  weatherCard: {
    background: 'rgba(255, 255, 255, 0.1)',
    padding: '20px',
    borderRadius: '15px',
    color: '#fff',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    marginTop: '20px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '400px',
  },
  weatherInfo: {
    textAlign: 'left',
  },
  weatherIcon: {
    width: '100px',
    height: '100px',
  },
  loading: {
    color: '#fff',
    marginTop: '20px',
  },
  noData: {
    color: '#fff',
    marginTop: '20px',
  },
};

function App() {
  const [search, setSearch] = useState("");
  const [weather, setWeather] = useState({});
  const [loading, setLoading] = useState(false);
  const [buttonStyle, setButtonStyle] = useState(styles.button);

  const searchPressed = () => {
    setLoading(true);
  
    setTimeout(() => {
      fetch(`${api.base}weather?q=${search}&units=metric&APPID=${api.key}`)
        .then((res) => res.json())
        .then((result) => {
          setWeather(result);
          setLoading(false);
          console.log(result);
        })
        .catch(() => {
          setLoading(false);
        });
    }, 300); 
  };
  

  return (
    <div style={styles.body}>
      <div style={styles.app}>
        <header style={styles.header}>
          <h1 style={styles.h1}>Weather App</h1>
          <div>
            <input
              type="text"
              placeholder="Search..."
              style={styles.input}
              onChange={(e) => setSearch(e.target.value)}
            />
            <button
              style={buttonStyle}
              onMouseEnter={() => setButtonStyle({ ...styles.button, ...styles.buttonHover })}
              onMouseLeave={() => setButtonStyle(styles.button)}
              onClick={searchPressed}
            >
              Search
            </button>
          </div>

          {loading ? (
            <p style={styles.loading}>Loading...</p>
          ) : weather.main ? (
            <div style={styles.weatherCard}>
              <div style={styles.weatherInfo}>
                <p>{weather.name}, {weather.sys.country}</p>
                <p>{Math.round(weather.main.temp)}°C</p>
                <p>{weather.weather[0].main}</p>
                <p>({weather.weather[0].description})</p>
              </div>
              <img
                style={styles.weatherIcon}
                src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                alt="weather icon"
              />
            </div>
          ) : (
            <p style={styles.noData}>No weather data available</p>
          )}
        </header>
      </div>
    </div>
  );
}

export default App;
