import React from "react";

// components
import Footer from "./components/Footer.js";
import Contact from "./components/Contact.js";
// import Team from "./components/Team.js";
import About from "./components/About.js";
import Testimonial from "./components/Testimonial.js";
import Header from "./components/Header.js";
import Navbar from './components/Navbar';

const App = () => {
  return (
    <>

      <Navbar transparent />

      <main>

        { <Header /> }
        { <Testimonial /> }
        {/* {<Team />} */}
        { <About /> }
        {<Contact />}

      </main>

      <Footer />

    </>
  );
}

export default App;

