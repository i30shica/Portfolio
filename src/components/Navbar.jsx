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
    <nav className="fixed top-0 left-0 w-full bg-white dark:bg-black text-black dark:text-white shadow-md z-50 font-sans border-b border-gray-300 dark:border-white transition-colors">
      <div className="max-w-9xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Left: name */}
        <div className="text-2xl font-bold text-pink-500 dark:text-white">Ishica</div>

        {/* Right: nav links + theme toggle */}
        <div className="flex items-center space-x-6">
          <div className="flex space-x-6 text-lg">
            <a href="#hero" className="hover:text-pink-400 dark:hover:text-gray-300 transition-colors">Home</a>
            <a href="#about" className="hover:text-pink-400 dark:hover:text-gray-300 transition-colors">About</a>
            <a href="#projects" className="hover:text-pink-400 dark:hover:text-gray-300 transition-colors">Projects</a>
            <a href="#blogs" className="hover:text-pink-400 dark:hover:text-gray-300 transition-colors">My Blogs</a>
            <a href="#contact" className="hover:text-pink-400 dark:hover:text-gray-300 transition-colors">Contact</a>
          </div>

          {/* Theme toggle */}
          <button
            onClick={() => setDarkMode((s) => !s)}
            aria-label="Toggle theme"
            className="p-2 rounded-full border border-gray-300 dark:border-white bg-transparent hover:bg-black/10 dark:hover:bg-white/10 transition"
          >
            {darkMode ? (
              <Moon className="w-5 h-5 text-white" />
            ) : (
              <Sun className="w-5 h-5 text-black" />
            )}
          </button>
        </div>
      </div>
    </nav>
  );
}
