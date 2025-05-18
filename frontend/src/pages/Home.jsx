import React from 'react';
import '../App.css';


function Home() {
  return (
    <div className="container">
      <header className="header">
        <img src="https://i.postimg.cc/Gtb4mKDp/HERElogo.png" alt="HERE Logo" className="logo" />
        <h1>GeoAPI by HERE Technologies</h1>
        <p>Powerful tools to access, process and visualize location data.</p>
      </header>

      <section className="features">
        <h2>What can you do?</h2>
        <ul>
          <li>📍 Enhance eficiency</li>
          <li>🧭 Interconnecting services</li>
          <li>🌍 Geocoding support</li>
          <li>📦 Precise mapping services</li>
        </ul>
      </section>

      <section className="cta">
        <h3>Start using the API</h3>
        <a href="http://localhost:5000/docs" target="_blank" rel="noreferrer">
          <button>Go to API Docs</button>
        </a>
      </section>

      <footer className="footer">
        <p>© 2025 Head Technologies. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Home;
