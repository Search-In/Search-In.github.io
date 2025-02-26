
// App.js
import React from "react";
import './App.css';
import Navbar from "./components/Navbar"; // Adjust the path if needed
import HomePage from './components/HomePage';
import Resolution from './components/Resolution';
import Benefit from './components/Benefit';
import Footer from './components/footer';

function App() {
  return (
    <div>
      <Navbar />
      <HomePage />
      <Resolution />
      <Benefit/>
      <Footer/>
      {/* Other components like HomePage go here */}
    </div>
  );
}
export default App;

