import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import "./App.css";
import Navbar from "./Component/Navbar";
import Header from "./Homepage/Header";
import About from "./Homepage/About";
import Usecase from "./Homepage/Usecase";
import Roadmap from "./Homepage/Roadmap";
import Presale from "./Homepage/Presale";
import Tokennomics from "./Homepage/Tokennomics";
import Footer from "./Component/Footer";
import BgVideo from './video/Bgvideo';

const App = () => {
  return (
    <Router>
      <>
      <div className="relative w-full h-[100vh] overflow-hidden">
          <BgVideo />
          <div className="relative z-10">
            <Navbar />
            <Header />
          </div>
        </div>

        <About />
        <Usecase />
        <Tokennomics />
        <Roadmap />
        <Presale />
        <Footer />
      </>
    </Router>
  );
};

export default App;
