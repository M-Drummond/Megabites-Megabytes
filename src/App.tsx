import './App.css';
import React, { useState, useEffect } from 'react';
import Header from './components/Header.tsx'; // Import the Header component
import Calculator from './components/Calculator.tsx';

function App() {
  // Retrieve dark mode preference from localStorage or default to false
  const storedDarkMode : boolean = localStorage.getItem('darkMode') === 'true';
  const [darkMode, setDarkMode] = useState(storedDarkMode); // Removed inversion of storedDarkMode

  // Function to toggle dark mode
  const toggleDarkMode = () => {
    const newDarkMode : boolean = !darkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem('darkMode', newDarkMode.toString()); // Store in localStorage as string
  };

  // Effect to update dark mode state on initial render
  useEffect(() => {
    localStorage.setItem('darkMode', darkMode.toString()); // Store in localStorage as string
  }, [darkMode]);

  return (
    <div className={`${darkMode ? 'bg-gray-800 text-white' : 'bg-gray-200'} transition-colors min-h-screen overflow-x-hidden`} >
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Calculator darkMode={darkMode} />
    </div>
  );
}

export default App;
