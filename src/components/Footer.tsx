import React from 'react';

function Footer({ darkMode, toggleDarkMode }) {
  return (
    <footer className="container mx-auto py-4 border-b border-current border-b-1 text-right">
      <p
        className={`${
          darkMode ? "bg-gray-800 text-amber-50" : "bg-amber-50 text-gray-800"
        } inline-block translate-y-[1.5em] pl-4  text-xs uppercase text-right`}
      >
        &copy; MD
      </p>
    </footer>
  );
}


export default Footer;