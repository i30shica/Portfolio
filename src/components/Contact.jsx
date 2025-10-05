import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp, FaInstagram, FaCopy } from "react-icons/fa";

export default function Contact() {
  const handleCopyEmail = () => {
    navigator.clipboard.writeText("ishicab205@gmail.com");
    alert("Email copied to clipboard!");
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col items-center justify-center 
                 bg-white text-black dark:bg-black dark:text-white 
                 px-6 py-20 text-center font-sans"
    >
      {/* Personalized Message */}
      <p className="text-xl md:text-2xl font-semibold mb-6 font-[Poppins]">
        I love talking about ideas, innovations, and sitcoms.
      </p>

      {/* Email with Copy Button */}
      <div className="flex items-center gap-2 mb-8 text-lg md:text-xl">
        <a
          href="mailto:ishicab205@gmail.com"
          className="underline text-pink-500 dark:text-white hover:text-pink-400 dark:hover:text-gray-300 transition-colors"
        >
          ishicab205@gmail.com
        </a>
        <button
          onClick={handleCopyEmail}
          className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition"
          aria-label="Copy email"
        >
          <FaCopy className="text-black dark:text-white" />
        </button>
      </div>

      {/* Social Links */}
      <p className="mb-4 font-semibold">Or find me on:</p>
      <div className="flex gap-4 flex-wrap justify-center">
        <a
          href="https://github.com/i30shica"
          target="_blank"
          rel="noopener noreferrer"
          className="p-4 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition"
        >
          <FaGithub size={24} className="text-black dark:text-white" />
        </a>
        <a
          href="https://www.linkedin.com/in/ishica-binod-kumar-34a77a246/"
          target="_blank"
          rel="noopener noreferrer"
          className="p-4 rounded-full bg-blue-100 dark:bg-blue-900 hover:bg-blue-200 dark:hover:bg-blue-800 transition"
        >
          <FaLinkedin size={24} className="text-blue-600 dark:text-white" />
        </a>
        <a
          href="https://wa.me/919637287612"
          target="_blank"
          rel="noopener noreferrer"
          className="p-4 rounded-full bg-green-100 dark:bg-green-900 hover:bg-green-200 dark:hover:bg-green-800 transition"
        >
          <FaWhatsapp size={24} className="text-green-600 dark:text-white" />
        </a>
        <a
          href="https://www.instagram.com/ish.i.ca/"
          target="_blank"
          rel="noopener noreferrer"
          className="p-4 rounded-full bg-pink-100 dark:bg-pink-900 hover:bg-pink-200 dark:hover:bg-pink-800 transition"
        >
          <FaInstagram size={24} className="text-pink-500 dark:text-white" />
        </a>
      </div>
    </section>
  );
}
