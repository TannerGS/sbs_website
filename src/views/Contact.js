import React from 'react'

// component imports
import Navbar from '../components/Navbar.js';
import Footer from '../components/Footer.js';
import ContactComponent from '../components/Contact.js';
import About from '../components/About.js';

const Contact = () => {
  return (
    <div>
      <Navbar transparent/>
      <div className="relative pt-16 pb-32 flex content-center items-center justify-center"
            style={{
              minHeight: "35vh"
            }}>
          <div className="absolute top-0 w-full h-full bg-center bg-cover"
              style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1560264357-8d9202250f21?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')"
              }}>
            <span id="blackOverlay" className="w-full h-full absolute opacity-75 bg-black"></span>
          </div>
          <div className="container relative mx-auto">
              <div className="items-center flex flex-wrap">
                <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                  <div className="lg:pr-12">
                    <h1 className="text-white font-semibold text-5xl">
                      Contact Us!
                    </h1>
                  </div>
                </div>

              </div>
          </div>
          <div
            className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
            style={{ height: "70px" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-gray-900 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
        </div>
      <div>
      <About />
      <ContactComponent />
      </div>
      <Footer />
    </div>
  )
}

export default Contact