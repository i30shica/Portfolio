import { useState } from "react";
import backgroundImg from "../assets/your-background.jpg";
import dp from "../assets/your-background.jpg";
import ResumeModal from "./ResumeModal"; // 👈 Import the modal

export default function Hero() {
  const [showResume, setShowResume] = useState(false);

  return (
    <section
      id="hero"
      className="relative w-full min-h-screen flex flex-col items-center justify-start bg-black text-white"
    >
      {/* Background Banner */}
      <div
        className="w-full h-80 bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImg})` }}
      ></div>

      {/* Profile Pic (DP) */}
      <div className="relative -mt-20">
        <img
          src={dp}
          alt="Ishica"
          className="w-40 h-40 rounded-full border-4 border-pink-500 shadow-lg object-cover"
        />
      </div>

      {/* Intro Text */}
      <div className="mt-6 text-center px-4">
        <h1 className="text-4xl md:text-5xl font-bold font-[Poppins]">
          Hi, I’m Ishica 🚀
        </h1>
        <p className="mt-2 text-lg md:text-xl text-gray-300">
          Love to build meaningful projects ✨ | Big fan of Marvel & BTS 💜
        </p>
      </div>

      {/* Navigation Links */}
      <div className="mt-6 flex flex-wrap justify-center gap-6 text-lg font-medium">
        <a
          href="#about"
          className="hover:underline hover:text-pink-400 transition-colors"
        >
          About Me
        </a>
        <a
          href="#projects"
          className="hover:underline hover:text-pink-400 transition-colors"
        >
          Projects
        </a>
        <button
          onClick={() => setShowResume(true)} // 👈 open the modal
          className="hover:underline hover:text-pink-400 transition-colors"
        >
          Resume
        </button>
        <a
          href="#blogs"
          className="hover:underline hover:text-pink-400 transition-colors"
        >
          My Blogs
        </a>
      </div>

      {/* Resume Modal */}
      <ResumeModal show={showResume} onClose={() => setShowResume(false)} />
    </section>
  );
}
