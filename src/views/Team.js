import React from 'react'

// component imports
import Navbar from '../components/Navbar.js';
import Footer from '../components/Footer.js';

const Team = () => {
  return (
    <div>
      <Navbar transparent/>
      <div>
          <div className="relative pt-16 h-4/5 flex content-center items-center justify-center">
            <div className="absolute top-0 w-full h-full bg-center bg-cover"
                style={{
                  backgroundImage: "url('https://images.unsplash.com/photo-1533750349088-cd871a92f312?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80')"
                }}>
              <span id="blackOverlay" className="w-full h-full absolute opacity-75 bg-black"></span>
            </div>
            <div className="container relative mx-auto pb-20">
                
            </div>
            <div
              className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
              style={{ height: "70px" }}
            >
            </div>
          </div>
      </div>
      Team
      <Footer />
    </div>
  )
}

export default Team