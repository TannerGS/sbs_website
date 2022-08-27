import React from "react";

// components
import Footer from "./components/Footer.js";
import Contact from "./components/Contact.js";
import Team from "./components/Team.js";
import Packages from "./components/Packages.js";
import About from "./components/About.js";
import Services from "./components/Services.js";
import Relationship from "./components/Relationship.js";
import Header from "./components/Header.js";
import Navbar from './components/Navbar';

const App = () => {
  return (
    <>

      <Navbar transparent />

      <main>

        { <Header /> }
        { <Relationship /> }
        { <Services /> }
        {<Packages />}
        {<Team />}
        { <About /> }
        {<Contact />}

      </main>

      <Footer />

    </>
  );
}

export default App;

