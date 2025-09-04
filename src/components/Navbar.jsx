// src/components/Navbar.jsx
import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(() => {
    try {
      return typeof window !== "undefined" && localStorage.getItem("theme") === "dark";
    } catch (e) {
      return false;
    }
  });

  useEffect(() => {
    try {
      if (darkMode) document.documentElement.classList.add("dark");
      else document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", darkMode ? "dark" : "light");
    } catch (e) {}
  }, [darkMode]);

  return (
    <nav className="fixed top-0 left-0 w-full bg-black dark:bg-black text-white shadow-md z-50 font-sans border-b border-white">
      <div className="max-w-9xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Left: name */}
        <div className="text-2xl font-bold text-white">Ishica</div>

        {/* Right: nav links + theme toggle */}
        <div className="flex items-center space-x-6">
          <div className="flex space-x-6 text-lg">
            <a href="#hero" className="hover:text-gray-300">Home</a>
            <a href="#about" className="hover:text-gray-300">About</a>
            <a href="#projects" className="hover:text-gray-300">Projects</a>
            <a href="#blogs" className="hover:text-gray-300">Blogs & Hobbies</a>
            <a href="#contact" className="hover:text-gray-300">Contact</a>
          </div>

          {/* Theme toggle */}
          <button
            onClick={() => setDarkMode((s) => !s)}
            aria-label="Toggle theme"
            className="p-2 rounded-full border border-white bg-transparent hover:bg-white/10 transition"
          >
            {darkMode ? (
              <Moon className="w-5 h-5 text-white" />
            ) : (
              <Sun className="w-5 h-5 text-white" />
            )}
          </button>
        </div>
      </div>
    </nav>
  );
}
