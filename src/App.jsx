import React from 'react';
import 'aos/dist/aos.css'; // Import the AOS styles
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import "./App.css";
import Navbar from "./Component/Navbar";
import Header from "./Homepage/Header";
import Footer from "./Component/Footer";
import PrivacyPolicy from './Homepage/Privacypolicy';
import BgVideo from './video/Bgvideo';
import HomePage from './Homepage/Homepage.jsx'; // Import HomePage component

const AppContent = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <>
      {/* 1st navbar, visible only on non-homepage routes */}
      {!isHomePage && <Navbar />}

      {/* Display this section only on the homepage */}
      {isHomePage && (
        <div className="relative w-full h-[100vh]  overflow-hidden">
          <BgVideo />
          <div className="relative z-10">
            {/* 2nd navbar, visible only on the homepage */}
            <Navbar />
            <Header />
          </div>
        </div>
      )}

      <Routes>
        <Route path="/" element={<HomePage />} /> {/* Display HomePage component */}
        <Route path="/privacypolicy" element={<PrivacyPolicy />} /> {/* PrivacyPolicy route */}
      </Routes>

      <Footer />
    </>
  );
};

const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;
