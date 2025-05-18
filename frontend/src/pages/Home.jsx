function Home() {
  return (
    <div className="page">
      <section className="main-content">

        {/* Nuevo bloque encabezado arriba de Purpose */}
        <div className="top-branding">
          <img
            src="https://i.postimg.cc/Gtb4mKDp/HERElogo.png"
            alt="Logo"
            className="logo"
          />
          <h1>HERE TECHNOLOGIES</h1>
        </div>

        <h2>Purpose</h2>
        <p>This API seeks to serve as a tool in order to help automate the detection of errors.</p>
        <p>Our goal is to resolve violations without the need of manual intervention.</p>
        <p>Para utilizar la API, haga clic en el botón a continuación:</p>
        <button>Click here to access the API</button>

        <h3>Return to main page</h3>
        <a href="https://www.here.com/">Click here</a>

        <h3>Explore other of our exciting HERE APIs</h3>
        <a href="https://www.here.com/developer/rest-apis">Click here</a>

        <h2>Get in contact with us</h2>
        <div className="button-group">
          <button>Send us an email</button>
          <button>Make a call</button>
        </div>
      </section>

      <footer>
        <p>© 2025 HERE TECHNOLOGIES. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Home;
