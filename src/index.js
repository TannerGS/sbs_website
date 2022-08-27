import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Team from './views/Team';
import Contact from './views/Contact';
import Services from './views/Services';
import Packages from './views/Packages';
import Accounting from './views/Accounting';
import Website from './views/Website';
import Social from './views/Social';
import Email from './views/Email';
import Search from './views/Search';
import Ads from './views/Ads';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='/team' element={<Team />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/services' element={<Services />} />
      <Route path='/packages' element={<Packages />} />
      <Route path='/accounting' element={<Accounting />} />
      <Route path='/website' element={<Website />} />
      <Route path='/social' element={<Social />} />
      <Route path='/email' element={<Email />} />
      <Route path='/seo' element={<Search />} />
      <Route path='/ads' element={<Ads />} />
    </Routes>
  </Router>
);

