import './App.css';
import React, { useState, useEffect } from 'react';
import Header from './components/Header.tsx'; // Import the Header component
import Footer from './components/Footer.tsx'; // Import the Footer component
import Calculator from './components/Calculator.tsx';

function App() {
  // Retrieve dark mode preference from localStorage or default to false
  const storedDarkMode: boolean = localStorage.getItem('darkMode') === 'true';
  const [darkMode, setDarkMode] = useState(storedDarkMode); // Removed inversion of storedDarkMode

  // Function to toggle dark mode
  const toggleDarkMode = () => {
    const newDarkMode: boolean = !darkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem('darkMode', newDarkMode.toString()); // Store in localStorage as string
  };

  // Effect to update dark mode state on initial render
  useEffect(() => {
    localStorage.setItem('darkMode', darkMode.toString()); // Store in localStorage as string
  }, [darkMode]);

  return (
    <div className={`${darkMode ? 'bg-gray-800 text-amber-50' : 'bg-amber-50 text-gray-800'} font-mono transition-colors min-h-screen overflow-x-hidden`} >
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} /> {/* Pass toggleDarkMode as a prop */}
      <Calculator darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Footer darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

    </div>
  );
}

export default App;
