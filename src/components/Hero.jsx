import { Github, Linkedin, Mail } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="h-screen flex flex-col items-start justify-center 
                 px-20 bg-white text-black dark:bg-black dark:text-white font-sans"
    >
      {/* Profile Image */}
      <img
        src="/profile.jpg" // put your photo in public folder as profile.jpg
        alt="Ishica"
        className="w-40 h-40 rounded-2xl border-4 border-gray-400 dark:border-white shadow-lg mb-6 object-cover"
      />

      {/* Name */}
      <h1 className="text-5xl font-bold">
        Hi, I’m Ishica 🚀
      </h1>

      {/* Tagline */}
      <p className="mt-4 text-lg text-gray-700 dark:text-gray-300 max-w-xl">
        Engineer | Tech Enthusiast | Blogger  
        <br />I love building meaningful projects & sharing ideas ✨
      </p>

      {/* Buttons */}
      <div className="mt-6 flex space-x-4">
        <a
          href="#projects"
          className="px-6 py-3 border border-gray-400 rounded-full 
                     text-black dark:text-white 
                     hover:bg-gray-200 dark:hover:bg-gray-800 transition"
        >
          View Projects →
        </a>
        <a
          href="#contact"
          className="px-6 py-3 border border-gray-400 rounded-full 
                     bg-black text-white dark:bg-white dark:text-black 
                     flex items-center space-x-2 
                     hover:bg-gray-800 dark:hover:bg-gray-200 transition"
        >
          <span>Contact Me</span>
          <Mail size={20} />
        </a>
      </div>

      {/* Social Icons */}
      <div className="mt-6 flex space-x-6">
        <a
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-600 dark:hover:text-gray-300"
        >
          <Github size={28} />
        </a>
        <a
          href="https://linkedin.com/in/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-600 dark:hover:text-gray-300"
        >
          <Linkedin size={28} />
        </a>
        <a
          href="mailto:youremail@example.com"
          className="hover:text-gray-600 dark:hover:text-gray-300"
        >
          <Mail size={28} />
        </a>
      </div>
    </section>
  );
}
